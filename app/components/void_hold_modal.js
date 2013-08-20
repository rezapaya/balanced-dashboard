Balanced.VoidHoldModalComponent = Ember.Component.extend({
    willDestroyElement: function() {
        this.$('.modal').modal('hide');
    },

    open: function () {
        this.$('.modal').modal('show');
    },

    save: function () {
        if (this.get('hold.isSaving')) {
            return;
        }

        var hold = this.get('hold');
        hold.set('is_void', true);
        hold.update();
    }
});
