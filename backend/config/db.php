<?php
// config/db.php
class Database
{
    private $host = 'localhost';
    private $db = 'videogamesbacklog';
    private $user = 'root';
    private $pass = '';
    private $charset = 'utf8mb4';
    public $pdo;

    public function __construct()
    {
        $dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            $this->pdo = new PDO($dsn, $this->user, $this->pass, $options);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }
}



// class Config {
//     const 
//         DB_USER = 'root',
//         DB_PSW = '',
//         DB_HOST = 'localhost',
//         DB_PORT =  3307,
//         DB_NAME = 'videogamebacklog',
//         DB_CHARSET = 'utf8mb4';
//     }