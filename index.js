const fastbootTransform = require('fastboot-transform');



module.exports = {
    name: 'ember-lightbox-me',
    options: {
        nodeAssets: {
            'lightbox-me': {
                import: {
                    include: ['jquery.lightbox-me.min.js'],
                    processTree(input) {
                        return fastbootTransform(input);
                    }
                }
            }
        }
    },

    included(app, parentAddon) {
        this._super.included.apply(this, arguments);
    }

};