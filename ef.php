<?php
/**
 * Package Ef
 * Version 1.0.0
 */
/*

Plugin name: ef
Plugin uri: https://github.com/BecotteEmile
Version: 1.0.0
Description: Permet d'afficher les destinations qui répondent à certains critères
*/


echo header("Access-Control-Allow-Origin: https://localhost:8080");
function emileb_enqueue()
{
// filemtime // retourne en milliseconde le temps de la dernière modification
// plugin_dir_path // retourne le chemin du répertoire du plugin
// __FILE__ // le fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts // le hook

$version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/ef.js");
wp_enqueue_style(   'eb_plugin_ef_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

wp_enqueue_script(  'eb_plugin_ef_js',
                    plugin_dir_url(__FILE__) ."js/ef.js",
                    array(),
                    $version_js,
                    true);
}
add_action('wp_enqueue_scripts', 'emileb_enqueue');

function creer_bouton_pays(){
    $lesCategories = ["France", "États-Unis", "Canada", "Argentine", "Chili", "Belgique", "Maroc", "Mexique", "Japon", "Italie", "Islande", "Chine", "Grèce", "Suisse"];
    $contenu = '';
    foreach($lesCategories as $category){
        $nomCat = $category;
        $contenu = '<button id="'.$nomCat.'" class="smth">'.$nomCat.'</button>';
        print_r($contenu);
    }
}


/* Création de la liste des destinations en HTML */
function creation_destinations_pays(){
    $contenu = creer_bouton_pays() . '<div class="contenu__pays__restapi"></div>';
    // $contenu = '<button class="bouton__ouvrir">Ouvrir</button>
    // <button id="cat_3" class="lien__categorie">Aventure</button>
    // <button id="cat_4" class="lien__categorie">Zen</button>
    // <div class="contenu__restapi">
    // </div>';
    return $contenu;
}

add_shortcode('em_destination_pays', 'creation_destinations_pays');