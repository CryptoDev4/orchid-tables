<?php

namespace CryptoDev4\OrchidTables\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * Class OrchidTables
 *
 * @mixin \CryptoDev4\OrchidTables\OrchidTables
 */
class OrchidTables extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor(): string
    {
        return 'orchid-tables';
    }
}
