<?php

use yii\db\Migration;

class m190115_141256_seoDataInsert extends Migration
{

    public function init()
    {
        $this->db = 'db';
        parent::init();
    }

    public function safeUp()
    {
        $this->batchInsert('{{%seo}}',
            ["page", "route", "domain", "title", "keywords", "description"],
            [
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'de',
                    'title' => 'Fahrzeugtransport platform',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'en',
                    'title' => 'Car transport platform',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'es',
                    'title' => 'Plataforma transporte de coches',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'lt',
                    'title' => 'Automobilių pervežimo platforma',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'md',
                    'title' => 'Transport auto',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'pl',
                    'title' => 'Platforma transporta samochodow',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'ro',
                    'title' => 'Transport auto',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => '',
                    'route' => 'site/index',
                    'domain' => 'ru',
                    'title' => 'Платформа перевозки автомобилей',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'de',
                    'title' => 'Fracht bekanntgeben',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'en',
                    'title' => 'Announce load',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'es',
                    'title' => 'Anunciar carga',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'md',
                    'title' => 'Posta o încărcătură',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'pl',
                    'title' => 'Ogłoś ładunek',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'ro',
                    'title' => 'Posta o încărcătură',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'announce-load',
                    'route' => 'load/announce',
                    'domain' => 'ru',
                    'title' => 'Разместить груз',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'autovežiai',
                    'route' => 'car-transporter/index',
                    'domain' => 'lt',
                    'title' => 'Autovežiai',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'de',
                    'title' => 'Autotransporter',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'en',
                    'title' => 'Car transporters',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'es',
                    'title' => 'Tráileres portavehículos',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'md',
                    'title' => 'Transportori auto',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'pl',
                    'title' => 'Autotransportery',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'ro',
                    'title' => 'Transportori auto',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'car-transporters',
                    'route' => 'car-transporter/index',
                    'domain' => 'ru',
                    'title' => 'Автовозы',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'de',
                    'title' => 'Hilfe',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'en',
                    'title' => 'Help',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'es',
                    'title' => 'Ayuda',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'md',
                    'title' => 'Ajutor',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'pl',
                    'title' => 'Pomoc',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'ro',
                    'title' => 'Ajutor',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'help',
                    'route' => 'site/help',
                    'domain' => 'ru',
                    'title' => 'Помощь',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'ieskoti-autovezio',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'lt',
                    'title' => 'Ieškoti autovežio',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'ieskoti-krovinio',
                    'route' => 'load/search',
                    'domain' => 'lt',
                    'title' => 'Ieškoti krovinio',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'de',
                    'title' => 'Impressum',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'en',
                    'title' => 'Imprint',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'es',
                    'title' => 'Requisitos',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'md',
                    'title' => 'Coordonate',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'pl',
                    'title' => 'Dane teleadresowe',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'ro',
                    'title' => 'Coordonate',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'imprint',
                    'route' => 'site/imprint',
                    'domain' => 'ru',
                    'title' => 'Реквизиты',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'kroviniai',
                    'route' => 'load/loads',
                    'domain' => 'lt',
                    'title' => 'Kroviniai',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'de',
                    'title' => 'Frachten',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'en',
                    'title' => 'Loads',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'es',
                    'title' => 'Cargas',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'md',
                    'title' => 'Încărcăturile',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'pl',
                    'title' => 'Ładunki',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'ro',
                    'title' => 'Încărcăturile',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'loads',
                    'route' => 'load/loads',
                    'domain' => 'ru',
                    'title' => 'Грузы',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'de',
                    'title' => 'Einloggen',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'en',
                    'title' => 'Login',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'es',
                    'title' => 'Iniciar sesión',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'md',
                    'title' => 'Conectare',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'pl',
                    'title' => 'Logowanie',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'ro',
                    'title' => 'Conectare',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'login',
                    'route' => 'site/login',
                    'domain' => 'ru',
                    'title' => 'Войти',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'pagalba',
                    'route' => 'site/help',
                    'domain' => 'lt',
                    'title' => 'Pagalba',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'prisijungimas',
                    'route' => 'site/login',
                    'domain' => 'lt',
                    'title' => 'Prisijungimas',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'registracija',
                    'route' => 'site/sign-up',
                    'domain' => 'lt',
                    'title' => 'Registracija',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'rekvizitai',
                    'route' => 'site/imprint',
                    'domain' => 'lt',
                    'title' => 'Rekvizitai',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'de',
                    'title' => 'Rundfahrt',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'en',
                    'title' => 'Roundtrips',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'es',
                    'title' => 'Ida y vuelta',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'lt',
                    'title' => 'Roundtrips',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'md',
                    'title' => 'Roundtrips',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'pl',
                    'title' => 'Roundtrips',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'ro',
                    'title' => 'Roundtrips',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'roundtrips',
                    'route' => 'load/round-trips',
                    'domain' => 'ru',
                    'title' => 'Roundtrips',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'de',
                    'title' => 'Autotransporter suchen',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'en',
                    'title' => 'Search car transporter',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'es',
                    'title' => 'Buscar tráiler portavehículos',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'md',
                    'title' => 'Căutarea transportorului auto',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'pl',
                    'title' => 'Szukaj autotransportera',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'ro',
                    'title' => 'Căutarea transportorului auto',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-car-transporter',
                    'route' => 'car-transporter-search/search-form',
                    'domain' => 'ru',
                    'title' => 'Найти автовоз',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'de',
                    'title' => 'Frachtsuche',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'en',
                    'title' => 'Search for load',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'es',
                    'title' => 'Buscar carga',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'md',
                    'title' => 'Căuta încărcătură',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'pl',
                    'title' => 'Szukaj ładunku',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'ro',
                    'title' => 'Căuta încărcătură',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'search-for-load',
                    'route' => 'load/search',
                    'domain' => 'ru',
                    'title' => 'Поиск груза',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'de',
                    'title' => 'Anmeldung',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'en',
                    'title' => 'Sign up',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'es',
                    'title' => 'Registrarse',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'md',
                    'title' => 'Înregistrare',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'pl',
                    'title' => 'Rejestracja',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'ro',
                    'title' => 'Înregistrare',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'sign-up',
                    'route' => 'site/sign-up',
                    'domain' => 'ru',
                    'title' => 'Регистрация',
                    'keywords' => '',
                    'description' => '',
                ],
                [
                    'page' => 'skelbti-krovini',
                    'route' => 'load/announce',
                    'domain' => 'lt',
                    'title' => 'Skelbti krovinį',
                    'keywords' => '',
                    'description' => '',
                ],
            ]
        );
    }

    public function safeDown()
    {
        //$this->truncateTable('{{%seo}} CASCADE');
    }
}
