jQuery($ => {
    $('body').on('click', '.js-hamburger', function () {
        let $this = $(this);
        $this.toggleClass('is-active');
        $('.primary-nav').toggleClass('is-active');
    })
});