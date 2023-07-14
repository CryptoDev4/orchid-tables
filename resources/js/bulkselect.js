document.addEventListener("DOMContentLoaded", function () {
    const bulkselect = function () {
        const els = document.querySelectorAll('.cb-checker:not(.cb-checker-loaded)');
        els.forEach(function (el) {
            const id = el.dataset.bulkselectId;
            const groupCheckbox = el.querySelector('.cb-bulk');
            const statHolder = document.querySelector('.cb-counter-' + id);

            groupCheckbox.classList.add('cb-checker-loaded');

            let lastChecked = null;

            const update = function () {
                const checkboxes = document.querySelectorAll('.cb-check-' + id + ':not([disabled])');
                const checked = document.querySelectorAll('.cb-check-' + id + ':checked');

                statHolder.textContent = checked.length + '/' + checkboxes.length;
            };

            const updateMain = function () {
                const checkboxes = document.querySelectorAll('.cb-check-' + id + ':not([disabled])');
                const checkedNum = document.querySelectorAll('.cb-check-' + id + ':checked').length;
                const cbNum = checkboxes.length;

                if (cbNum === 0 && checkedNum === 0) {
                    groupCheckbox.checked = false;
                    groupCheckbox.indeterminate = true;
                } else if (cbNum === checkedNum) {
                    groupCheckbox.checked = true;
                    groupCheckbox.indeterminate = false;
                } else if (checkedNum === 0) {
                    groupCheckbox.checked = false;
                    groupCheckbox.indeterminate = false;
                } else {
                    groupCheckbox.indeterminate = true;
                }

                update();
            };

            document.querySelectorAll('.cb-check-' + id).forEach(function (checkbox) {
                checkbox.addEventListener('change', updateMain);
                checkbox.addEventListener('cryptodev4:checked', updateMain);
                checkbox.addEventListener('click', function (e) {
                    const checkboxes = document.querySelectorAll('.cb-check-' + id + ':not([disabled])');
                    const clickTarget = this;

                    if (!lastChecked) {
                        lastChecked = clickTarget;
                        return;
                    }

                    if (e.shiftKey) {
                        const start = Array.from(checkboxes).indexOf(clickTarget);
                        const end = Array.from(checkboxes).indexOf(lastChecked);
                        checkboxes.forEach(function (cb, index) {
                            if (index >= Math.min(start, end) && index <= Math.max(start, end)) {
                                cb.checked = lastChecked.checked;
                                cb.dispatchEvent(new Event('cryptodev4:checked'));
                            }
                        });
                    }

                    update();
                    lastChecked = clickTarget;
                });
            });

            groupCheckbox.addEventListener('click', function () {
                const checkboxes = document.querySelectorAll('.cb-check-' + id + ':not([disabled])');
                checkboxes.forEach(function (checkbox) {
                    checkbox.checked = groupCheckbox.checked;
                });
                update();
            });

            updateMain();
        });
    };

    document.addEventListener("turbo:load", bulkselect);
    bulkselect();
});

// $(function () {
//     const bulkselect = function () {
//         const $els = $('.cb-checker:not(.cb-checker-loaded)');
//         $els.each(function () {
//             const id = $(this).data('bulkselect-id');
//             const $groupCheckbox = $(this).find('.cb-bulk');
//             const $statHolder = $('.cb-counter-' + id);

//             $groupCheckbox.addClass('cb-checker-loaded');

//             let lastChecked = null;

//             const update = function () {
//                 const $checkboxes = $('.cb-check-' + id).not('[disabled]');

//                 const $checked = $checkboxes.filter(':checked');

//                 $statHolder.text($checked.length + '/' + $checkboxes.length);
//             }

//             const updateMain = function updateMain() {
//                 const $checkboxes = $('.cb-check-' + id).not('[disabled]');

//                 const checkednum = $checkboxes.filter(':checked').length
//                 const cbnum = $checkboxes.length;

//                 if (cbnum === 0 && checkednum === 0) {
//                     $groupCheckbox.prop('checked', false);
//                     $groupCheckbox.prop('indeterminate', true);
//                 } else if (cbnum === checkednum) {
//                     $groupCheckbox.prop('checked', true);
//                     $groupCheckbox.prop('indeterminate', false);
//                 } else if (0 === checkednum) {
//                     $groupCheckbox.prop('checked', false);
//                     $groupCheckbox.prop('indeterminate', false);
//                 } else {
//                     $groupCheckbox.prop('indeterminate', true);
//                 }

//                 update();
//             };


//             $('.cb-check-' + id).change(updateMain).on('cryptodev4:checked', updateMain).click(function (e) {
//                 const $checkboxes = $('.cb-check-' + id).not('[disabled]');

//                 const clickTarget = this;
//                 if (!lastChecked) {
//                     lastChecked = clickTarget;
//                     return;
//                 }

//                 if (e.shiftKey) {
//                     const start = $checkboxes.index(clickTarget);
//                     const end = $checkboxes.index(lastChecked);
//                     $checkboxes.slice(Math.min(start, end), Math.max(start, end) + 1).prop('checked', lastChecked.checked).trigger('cryptodev4:checked');
//                 }

//                 update();

//                 lastChecked = clickTarget;
//             });

//             $groupCheckbox.on('click', function () {
//                 const $checkboxes = $('.cb-check-' + id).not('[disabled]');

//                 $checkboxes.prop('checked', $groupCheckbox.prop('checked'));
//                 update();
//             })
//             updateMain();
//         });
//     }

//     document.addEventListener("turbo:load", bulkselect);
//     bulkselect();
// });
