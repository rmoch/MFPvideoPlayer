// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

// Internationalisation du lecteur.
var i18n = {
	'en': {
		playControl: {
			play: 'Play',
			pause: 'Pause'
		},
		videoProgressBar: 'Video Progress Bar',
		timeData: {
			current: 'Current Time',
			duration: 'Duration Time',
			remaining: 'Remaining Time'
		},
		captionsPanel: 'Captions Settings',
		captionsControl: {
			show: 'Show Captions Settings Panel (Above)',
			hide: 'Hide Captions Settings Panel'
		},
		audiodescriptionControl: {
			off: 'Audiodescription Off',
			on: 'Audiodescription On'
		},
		muteControl: {
			mute: 'Mute',
			unmute: 'Unmute'
		},
		volumeLevel: 'Volume Level',
		fullscreenControl: {
			fullscreen: 'Fullscreen',
			nonfullscreen: 'Non-Fullscreen'
		}
	},
	'fr': {
		playControl: {
			play: 'Lancer la lecture',
			pause: 'Mettre en pause la lecture'
		},
		videoProgressBar: 'Barre de progression de la vidéo',
		timeData: {
			current: 'Temps écoulé',
			duration: 'Durée',
			remaining: 'Temps restant'
		},
		captionsPanel: 'Paramètres des sous-titres',
		captionsControl: {
			show: 'Afficher ci-après le panneau des paramètres de sous-titres',
			hide: 'Masquer le panneau des paramètres de sous-titres'
		},
		audiodescriptionControl: {
			off: "Désactiver l'audiodescription",
			on: "Activer l'audiodescription"
		},
		muteControl: {
			mute: 'Désactiver le son',
			unmute: 'Activer le son'
		},
		volumeLevel: 'Volume sonore',
		fullscreenControl: {
			fullscreen: 'Activer le mode plain écran',
			nonfullscreen: 'Désactiver le mode plein écran'
		}
	}
};
// Images de l'interface du lecteur.
var uiControls = {
	playControl: {
		play: 'client/images/play.png',
		pause: 'client/images/pause.png'
	},
	captionsControl: 'client/images/captions.png',
	audiodescriptionControl: 'client/images/audiodescription.png', 
	muteControl: {
		mute: 'client/images/mute.png',
		unmute: 'client/images/unmute.png'
	},
	fullscreenControl: {
		fullscreen: 'client/images/fullscreen.png',
		nonfullscreen: 'client/images/nonfullscreen.png'
	}
};
// Couleurs de personnalisation des sous-titres.
var colors = [
	{ hexa: 'ffff00', name: 'Jaune', defaultcolor: true }, 
	{ hexa: '008000', name: 'Vert' }, 
	{ hexa: '0000ff', name: 'Bleu' }, 
	{ hexa: 'ff0000', name: 'Rouge' }, 
	{ hexa: '00ffff', name: 'Cyan' }, 
	{ hexa: 'ff00ff', name: 'Magenta' }, 
	{ hexa: '000000', name: 'Noir', defaultshadow: true }, 
	{ hexa: 'ffffff', name: 'Blanc' }
];


 // @license-end