<?php

use CryptoDev4\OrchidTables\Mixins;

return [
    'mixins' => [
        'can'    => Mixins\CanMixin::class,
        'cell'   => Mixins\CellMixin::class,
        'layout' => Mixins\LayoutMixin::class,
    ],

    'date_format' => null,
];
