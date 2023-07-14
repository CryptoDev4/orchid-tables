document.addEventListener("DOMContentLoaded", function () {
    const tableAdvanced = function () {
        const els = document.querySelectorAll('tr[data-table-advanced-rowlink]');
        els.forEach(function (el) {
            el.addEventListener('click', function (e) {
                if (!['A', 'BUTTON', 'LABEL', 'INPUT'].includes(e.target.tagName)) {
                    var target = this.getAttribute('data-table-advanced-rowlink');
                    Turbo.visit(target);
                }
            });
        });
    };

    document.addEventListener("turbo:load", tableAdvanced);
    tableAdvanced();
});

// $(function () {
//     const tableAdvanced = function () {
//         const $els = $('tr[data-table-advanced-rowlink]');
//         $els.click(function (e) {
//             if (!$(e.target).is('a,button,label,input')) {
//                 var target = $(this).data('table-advanced-rowlink');
//                 Turbo.visit(target);
//             }
//         });
//     }

//     document.addEventListener("turbo:load", tableAdvanced);
//     tableAdvanced();
// })
