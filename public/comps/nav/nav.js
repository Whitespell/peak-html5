var gestures = {


    unique: { // ids
        "notificationButton": {
            release: function(el) {
                alert("ya");
                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->notifications"]
                }, true);
            }
        }
    },

    collective: { //classes

        "optbutton": {
            release: function(el) {
                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home"]
                }, true);
            }
        }


    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);