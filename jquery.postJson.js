/*!
 * jQuery PostJson Plugin
 *
 * https://github.com/shoter/postJsonForJquery
 *
 * Copyright (c) 2017 Damian Laczak
 * Released under the MIT license
 */
(function ($) {

    $.postJSON = (url, data, success) => {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: url,
            data: data,
            success: success
        });
    }

}(jQuery));