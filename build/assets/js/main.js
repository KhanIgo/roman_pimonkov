jQuery($ => {
    $('body').on('click', '.js-hamburger', function () {

//        alert();

        let $this = $(this);
        $this.toggleClass('is-active');
        $('.primary-nav').toggleClass('is-active');
    });

    VK.Widgets.ContactUs("vk_contact_us", {}, -157325072);
});
