<?php
    include("reuseFunction.php");

    define("PROTOCOL", mb_strtolower(explode("/", $_SERVER['SERVER_PROTOCOL'])[0]));
    define("HOSTNAME", $_SERVER['HTTP_HOST']);
    define("DOCUMENT_ROOT", $_SERVER['DOCUMENT_ROOT']);
    define("REQUEST_URI", $_SERVER['REQUEST_URI']);

    // Title
    define("TITLE", "Horrorzen");

    // This is root folder path
    define("ROOT_HTTP", PROTOCOL."://".HOSTNAME.REQUEST_URI);

    // This is root http path
    define("ROOT", DOCUMENT_ROOT.REQUEST_URI);

    // This is root folder path
    define("BUILD_PATH_HTTP", ROOT_HTTP."build/");

    // This is root http path
    define("VIEW_PATH", ROOT."views/");
?>
