define({

    modalDialog: function(options){
        var modal = $('.modal'),
        modalDialog = modal.find('.modal-dialog');
        modalDialog.css('margin-top', ( screen.height / 2 - 140 ));
        if(options.title) modal.find('.modal-title').html(options.title);
        if(options.body) modal.find('.modal-body').html(options.body);
        if(options.large) modal.addClass('bs-example-modal-lg');
        if(options.small) modal.addClass('bs-example-modal-sm');
        if(options.show) modal.modal('show');
        if(options.footer){
            modal.find('.modal-footer').empty();
            if(options.footer.buttonOk){
                modal.find('.modal-footer').append(
                    $('<button type="button" class="btn blue" ' +
                          'data-dismiss="modal">').unbind('click')
                        .bind('click', options.footer.buttonOk)
                        .text('OK')
                )
            }
            if(options.footer.buttonCancel){
                if(options.footer.buttonCancel === true){
                    modal.find('.modal-footer').prepend(
                        $('<button type="button" class="btn"' +
                              'data-dismiss="modal">Cancel</button>')
                    )
                }
            }
        }
        return modal;
    },

    modalDialogDelete: function(options){
        var modal = $('.modal'),
        modalDialog = modal.find('.modal-dialog');
        modalDialog.css('margin-top', ( screen.height / 2 - 140 ));
        if(options.title) modal.find('.modal-title').html(options.title);
        if(options.body) modal.find('.modal-body').html(options.body);
        if(options.large) modal.addClass('bs-example-modal-lg');
        if(options.small) modal.addClass('bs-example-modal-sm');
        if(options.show) modal.modal('show');
        if(options.footer){
            modal.find('.modal-footer').empty();
            if(options.footer.buttonOk){
                modal.find('.modal-footer').append(
                    $('<button type="button" class="btn blue" ' +
                          'data-dismiss="modal">').unbind('click')
                        .bind('click', options.footer.buttonOk)
                        .text('Delete')
                )
            }
            if(options.footer.buttonCancel){
                if(options.footer.buttonCancel === true){
                    modal.find('.modal-footer').prepend(
                        $('<button type="button" class="btn"' +
                              'data-dismiss="modal">Cancel</button>')
                    )
                }
            }
        }
        return modal;
    },

    /* Now we have another notification window (notify Window), this must to be deleted in future */
    modelError: function(b, t){
        this.modalDialog({
            title: t ? t : 'Error',
            body: typeof b == "string" ? b : b.responseJSON ? b.responseJSON.data || JSON.stringify(b.responseJSON): b.responseText,
            show: true,
            buttonCancel: false,
        })
    },

    notifyWindow: function(b, t){
        var err = typeof b == "string" ? b : b.responseJSON ? b.responseJSON.data || JSON.stringify(b.responseJSON): b.responseText;
        $.notify(err, {
            autoHideDelay: 5000,
            clickToHide: true,
            globalPosition: 'bottom left',
            className: 'error',
        });
    }
});