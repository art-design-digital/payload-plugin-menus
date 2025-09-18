import React, { useState, useMemo, useEffect } from 'react';
import { useField } from 'payload/components/forms';
import { createIconMap, getIconPack, type IconPackType } from '../../utils/iconPackUtils';
import type { IconType } from 'react-icons';
import './styles.css';

// Translations object for multi-language support
const translations = {
	de: {
		selectIcon: 'Icon auswählen',
		noIconSelected: 'Kein Icon ausgewählt',
		loadingIcons: 'Icons werden geladen...',
		searchIcons: 'Icons suchen...',
		clear: 'Löschen',
		noResults: 'Keine Icons gefunden für',
		openIconPicker: 'Icon-Auswahl öffnen',
		closeIconPicker: 'Icon-Auswahl schließen'
	},
	en: {
		selectIcon: 'Select an icon',
		noIconSelected: 'No icon selected',
		loadingIcons: 'Loading icons...',
		searchIcons: 'Search icons...',
		clear: 'Clear',
		noResults: 'No icons found for',
		openIconPicker: 'Open icon picker',
		closeIconPicker: 'Close icon picker'
	}
};

interface IconPickerProps {
	path: string;
	label?: string | { de?: string; en?: string };
	required?: boolean;
	admin?: {
		description?: string | { de?: string; en?: string };
		custom?: {
			iconPack?: IconPackType;
		};
	};
}

const IconPicker: React.FC<IconPickerProps> = (props) => {
	const { path, label, required = false, admin } = props;

	const description = admin?.description;
	const { value, setValue } = useField<string>({ path });
	const [searchTerm, setSearchTerm] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [iconMap, setIconMap] = useState<Record<string, IconType>>({});
	const [isLoading, setIsLoading] = useState(true);

	// Get iconPack from custom prop in Payload 2
	const iconPackType: IconPackType = admin?.custom?.iconPack || 'Phosphor Icons';

	// Detect current language (fallback to German as per Payload config)
	const currentLanguage = typeof navigator !== 'undefined' && navigator.language.startsWith('en') ? 'en' : 'de';
	const t = translations[currentLanguage];

	// Handle localized labels
	const labelText = label ? (typeof label === 'string' ? label : label.de || label.en || 'Icon') : 'Icon';

	// Handle localized descriptions
	const descriptionText = description
		? typeof description === 'string'
			? description
			: description[currentLanguage] || description.de || description.en || ''
		: '';

	// Load icon pack dynamically
	useEffect(() => {
		const loadIconPack = async () => {
			setIsLoading(true);
			try {
				const iconPack = await getIconPack(iconPackType);
				const map = createIconMap(iconPack);
				setIconMap(map);
			} catch (error) {
				console.error('Failed to load icon pack:', error);
			} finally {
				setIsLoading(false);
			}
		};

		loadIconPack();
	}, [iconPackType]);

	// Filter icons based on search term
	const filteredIcons = useMemo(() => {
		const icons = Object.keys(iconMap);
		if (!searchTerm) return icons.slice(0, 50); // Show first 50 icons by default

		return icons.filter((iconName) => iconName.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 50); // Limit to 50 results
	}, [searchTerm, iconMap]);

	// Get the current selected icon component
	const SelectedIcon = value ? iconMap[value] : null;

	const handleIconSelect = (iconName: string) => {
		setValue(iconName);
		setIsOpen(false);
		setSearchTerm('');
	};

	const handleClear = () => {
		setValue('');
		setIsOpen(false);
		setSearchTerm('');
	};

	return (
		<div className='icon-picker'>
			<label className='field-label' htmlFor={`field-${path}`}>
				{labelText} {required && <span className='required'>*</span>}
			</label>

			<div className='icon-picker-container react-select'>
				{/* Selected Icon Display */}
				<div
					className={`icon-picker-selected rs__control ${isLoading ? 'rs__control--is-disabled' : ''}`}
					onClick={() => !isLoading && setIsOpen(!isOpen)}
					tabIndex={0}
					role='combobox'
					aria-expanded={isOpen}
					aria-haspopup='listbox'
					aria-label={labelText}
					aria-controls='icon-picker-dropdown'
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							if (!isLoading) setIsOpen(!isOpen);
						}
						if (e.key === 'Escape' && isOpen) {
							setIsOpen(false);
						}
					}}
				>
					{SelectedIcon ? (
						<div className='icon-picker-preview'>
							{React.createElement(SelectedIcon as React.ComponentType<any>, { className: 'icon-picker-icon' })}
						</div>
					) : null}
					<div className='icon-picker-label'>{value || t.noIconSelected}</div>

					{/* Indicators container like Payload select */}
					<div className='rs__indicators'>
						{/* Clear button (X) - only show when value exists */}
						{value && !isLoading && (
							<div
								className='rs__indicator clear-indicator'
								role='button'
								tabIndex={0}
								onClick={(e) => {
									e.stopPropagation();
									handleClear();
								}}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										e.stopPropagation();
										handleClear();
									}
								}}
								aria-label={t.clear}
							>
								<svg className='clear-indicator__icon' width='20' height='20' viewBox='0 0 20 20' fill='none'>
									<path
										d='M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.652-3.03L5.652 7.09a1.2 1.2 0 011.697-1.697L10 8.423l2.651-3.03a1.2 1.2 0 111.697 1.697l-2.652 3.03 2.652 3.03a1.2 1.2 0 010 1.698z'
										fill='currentColor'
									/>
								</svg>
							</div>
						)}

						{/* Dropdown arrow */}
						<div className='rs__indicator dropdown-indicator'>
							<svg
								className={`dropdown-indicator__icon ${isOpen ? 'dropdown-indicator__icon--rotated' : ''}`}
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
									fill='currentColor'
								/>
							</svg>
						</div>
					</div>
				</div>

				{/* Visually hidden input for form value and label association */}
				<input
					type='text'
					id={`field-${path}`}
					name={path}
					value={value || ''}
					readOnly
					tabIndex={-1}
					style={{
						position: 'absolute',
						left: '-9999px',
						width: '1px',
						height: '1px',
						opacity: 0,
						pointerEvents: 'none'
					}}
					aria-hidden='true'
				/>

				{/* Icon Selection Dropdown */}
				{isOpen && (
					<div className='icon-picker-dropdown' role='listbox' aria-label={t.searchIcons}>
						{isLoading ? (
							<div className='icon-picker-loading'>
								<div>{t.loadingIcons}</div>
							</div>
						) : (
							<>
								<div className='icon-picker-search'>
									<input
										type='text'
										id={`search-${path}`}
										name={`search-${path}`}
										placeholder={t.searchIcons}
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className='icon-picker-search-input'
									/>
								</div>

								<div className='icon-picker-grid'>
									{filteredIcons.map((iconName) => {
										const IconComponent = iconMap[iconName];
										return (
											<button
												key={iconName}
												type='button'
												className={`icon-picker-option ${value === iconName ? 'selected' : ''}`}
												onClick={() => handleIconSelect(iconName)}
												title={iconName}
												role='option'
												aria-selected={value === iconName}
											>
												{React.createElement(IconComponent as React.ComponentType<any>, { className: 'icon-picker-icon' })}
												<span className='icon-picker-name'>{iconName}</span>
											</button>
										);
									})}
								</div>

								{filteredIcons.length === 0 && !isLoading && (
									<div className='icon-picker-no-results'>
										{t.noResults} "{searchTerm}"
									</div>
								)}
							</>
						)}
					</div>
				)}
			</div>

			{descriptionText && <div className='field-description'>{descriptionText}</div>}
		</div>
	);
};

export default IconPicker;
