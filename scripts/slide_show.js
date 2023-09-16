(function ($) {
    $(document).ready(function () {
        $('.container-slides').flickity({
            cellAlign: 'center',
            wrapAround: true,
            // fullscreen: true, ovo ne radi, gledacu da popravim. Ali nije preko potrebno
            imagesLoaded: true

        });
    });
})(jQuery)