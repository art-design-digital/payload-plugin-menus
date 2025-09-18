const translations = {
  collection: {
    labels: {
      singular: {
        en: 'Menu',
        de: 'Menü',
        fr: 'Menu',
      },
      plural: {
        en: 'Menus',
        de: 'Menüs',
        fr: 'Menus',
      },
    },
    description: {
      en: 'Menus are a collection of menu items that are displayed on the website.',
      de: 'Menüs sind eine Sammlung von Menüpunkten, die auf der Website angezeigt werden.',
      fr: 'Les menus sont une collection de liens de menu qui sont affichés sur le site Web.',
    },
  },
  fields: {
    name: {
      label: {
        en: 'Name',
        de: 'Name',
        fr: 'Nom',
      },
      description: {
        en: 'Enter a name for the menu.',
        de: 'Geben Sie einen Namen für das Menü ein.',
        fr: 'Entrez un nom pour le menu.',
      },
    },
    slug: {
      label: {
        en: 'Slug',
        de: 'Slug',
        fr: 'Slug',
      },
      description: {
        en: 'The slug is generated automatically when you enter and save the name. It serves as a unique identifier for the menu.',
        de: 'Der Slug wird automatisch generiert, wenn Sie den Namen eingeben und speichern. Er dient als eindeutiger Bezeichner für das Menü.',
        fr: "Le slug est généré automatiquement lorsque vous entrez et enregistrez le nom. Il sert d'identifiant unique pour le menu.",
      },
    },
    items: {
      labels: {
        singular: {
          en: 'Menu Item',
          de: 'Menüpunkt',
          fr: 'Élément de menu',
        },
        plural: {
          en: 'Menu Items',
          de: 'Menüpunkte',
          fr: 'Éléments de menu',
        },
      },
      label: {
        en: 'Menu Items',
        de: 'Menüpunkte',
        fr: 'Éléments de menu',
      },
      description: {
        en: 'Add menu items to this menu.',
        de: 'Fügen Sie Menüpunkte zu diesem Menü hinzu.',
        fr: 'Ajoutez des éléments de menu à ce menu.',
      },
      previewImageField: {
        label: {
          en: 'Preview Image',
          de: 'Vorschaubild',
          fr: 'Image de prévisualisation',
        },
        description: {
          en: 'Upload an preview image for this menu item.',
          de: 'Laden Sie ein Vorschaubild für diesen Menüpunkt hoch.',
          fr: 'Téléchargez une image de prévisualisation pour cet élément de menu.',
        },
      },
      labelField: {
        label: {
          en: 'Label',
          de: 'Beschriftung',
          fr: 'Étiquette',
        },
        description: {
          en: 'Enter the label for this menu item.',
          de: 'Geben Sie die Beschriftung für diesen Menüpunkt ein.',
          fr: 'Entrez l’étiquette de cet élément de menu.',
        },
      },
      highlightField: {
        label: {
          en: 'Highlight Menu Item',
          de: 'Menüpunkt Hervorheben',
          fr: 'Surligner l’élément de menu',
        },
        description: {
          en: 'Select this option to highlight this menu item.',
          de: 'Wählen Sie diese Option, um diesen Menüpunkt hervorzuheben.',
          fr: 'Sélectionnez cette option pour mettre en surbrillance cet élément de menu.',
        },
      },
      distanceField: {
        label: {
          en: 'Distance to Previous Menu Item',
          de: 'Abstand zum vorherigen Menüpunkt',
          fr: 'Distance au menu précédent',
        },
        description: {
          en: 'Select this option to give this menu item more space from the previous menu item.',
          de: 'Wählen Sie diese Option, um diesen Menüpunkt mehr Abstand zum vorherigen Menüpunkt zu geben.',
          fr: "Sélectionnez cette option pour donner plus d'espace à cet élément de menu par rapport à l'élément précédent.",
        },
      },
      iconField: {
        label: {
          en: 'Icon',
          de: 'Icon',
          fr: 'Icône',
        },
        description: {
          en: 'Select an icon for this menu item.',
          de: 'Wählen Sie ein Icon für diesen Menüpunkt.',
          fr: "Sélectionnez une icône pour cet élément de menu.",
        },
      },
      type: {
        label: {
          en: 'Type of Menu Item',
          de: 'Typ des Menüpunktes',
          fr: 'Type d’élément de menu',
        },
        description: {
          en: 'Select the type this menu item should have.',
          de: 'Wählen Sie den Typen aus den dieser Menüpunkt haben soll.',
          fr: 'Sélectionnez le type que cet élément de menu doit avoir.',
        },

        options: {
          collection: {
            label: {
              en: 'Collection',
              de: 'Sammlung',
              fr: 'Collection',
            },
          },
          custom: {
            label: {
              en: 'Custom Link',
              de: 'Eigener Link',
              fr: 'Lien personnalisé',
            },
          },
          children: {
            label: {
              en: 'With Child Elements',
              de: 'Mit Kindelementen',
              fr: 'Avec des éléments enfants',
            },
          },
        },
      },

      collections: {
        label: {
          en: 'Collection',
          de: 'Sammlung',
          fr: 'Collection',
        },
        description: {
          en: 'Select the collection that should be linked with this menu item.',
          de: 'Wählen Sie die Sammlung aus, die mit diesem Menüpunkt verlinkt werden soll.',
          fr: 'Sélectionnez la collection qui doit être liée à cet élément de menu.',
        },
      },

      customURL: {
        label: {
          en: 'Link URL',
          de: 'Link-URL',
          fr: 'Lien URL',
        },
        description: {
          en: 'Enter the URL that should be linked with this menu item.',
          de: 'Geben Sie die URL ein, die mit diesem Menüpunkt verlinkt werden soll.',
          fr: 'Entrez l’URL qui doit être liée à cet élément de menu.',
        },
      },

      anchor: {
        label: {
          en: 'Anchor',
          de: 'Anker',
          fr: 'Ancre',
        },
        description: {
          en: 'Enter the anchor (without #) for this menu item. This is used to link to a specific location on the page.',
          de: 'Geben Sie den Anker (ohne #) für diesen Menüpunkt ein. Dieser wird verwendet, um auf eine bestimmte Stelle auf der Seite zu verlinken.',
          fr: 'Entrez l’ancre (sans #) pour cet élément de menu. Ceci est utilisé pour lier à un emplacement spécifique sur la page.',
        },
      },

      newTab: {
        label: {
          en: 'Open in new tab',
          de: 'In neuem Tab öffnen',
          fr: 'Ouvrir dans un nouvel onglet',
        },
        description: {
          en: 'Select this option to open the link in a new tab.',
          de: 'Wählen Sie diese Option, um den Link in einem neuen Tab zu öffnen.',
          fr: 'Sélectionnez cette option pour ouvrir le lien dans un nouvel onglet.',
        },
      },
    },
  },
}

export default translations
