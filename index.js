const fastbootTransform = require('fastboot-transform');



module.exports = {
    name: 'ember-lightbox-me',
    options: {
        nodeAssets: {
            'Lightbox_me': {
                import: {
                    include: ['jquery.lightbox_me.js'],
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