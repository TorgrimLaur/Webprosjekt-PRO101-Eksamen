<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit453516e196e1be4c43fa495b9bb9d572
{
    public static $prefixesPsr0 = array (
        'x' => 
        array (
            'xrstf\\Composer52' => 
            array (
                0 => __DIR__ . '/..' . '/xrstf/composer-php52/lib',
            ),
        ),
        't' => 
        array (
            'tad_DI52_' => 
            array (
                0 => __DIR__ . '/..' . '/lucatume/di52/src',
            ),
        ),
    );

    public static $classMap = array (
        'WP_Async_Request' => __DIR__ . '/..' . '/a5hleyrich/wp-background-processing/classes/wp-async-request.php',
        'WP_Background_Process' => __DIR__ . '/..' . '/a5hleyrich/wp-background-processing/classes/wp-background-process.php',
        'tad_DI52_Container' => __DIR__ . '/..' . '/lucatume/di52/src/tad/DI52/Container.php',
        'tad_DI52_ContainerInterface' => __DIR__ . '/..' . '/lucatume/di52/src/tad/DI52/ContainerInterface.php',
        'tad_DI52_ProtectedValue' => __DIR__ . '/..' . '/lucatume/di52/src/tad/DI52/ProtectedValue.php',
        'tad_DI52_ServiceProvider' => __DIR__ . '/..' . '/lucatume/di52/src/tad/DI52/ServiceProvider.php',
        'tad_DI52_ServiceProviderInterface' => __DIR__ . '/..' . '/lucatume/di52/src/tad/DI52/ServiceProviderInterface.php',
        'xrstf\\Composer52\\AutoloadGenerator' => __DIR__ . '/..' . '/xrstf/composer-php52/lib/xrstf/Composer52/AutoloadGenerator.php',
        'xrstf\\Composer52\\Generator' => __DIR__ . '/..' . '/xrstf/composer-php52/lib/xrstf/Composer52/Generator.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit453516e196e1be4c43fa495b9bb9d572::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit453516e196e1be4c43fa495b9bb9d572::$classMap;

        }, null, ClassLoader::class);
    }
}
