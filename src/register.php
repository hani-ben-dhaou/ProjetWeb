<?php
// Vérifie qu&#39;il provient d&#39;un formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
//identifiants mysql
$host = "localhost";
$username = "root";
$password = "";
$database = "cpi2";
$name = $_POST["name"];
$email = $_POST["email"];
//la function isset determine si une variable existe
if (!isset($name)){
die("s'il vous plaît entrez votre nom");
}
if (!isset($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
die("s'il vous plaît entrez votre adresse e-mail");
}
//Ouvrir une nouvelle connexion au serveur MySQL
$mysqli = new mysqli($host, $username, $password, $database);
//Afficher toute erreur de connexion
if ($mysqli->connect_error) {
die('Error : ('. $mysqli->connect_errno .')'. $mysqli->connect_error);
}
//préparer la requête d&#39;insertion SQL
$statement = $mysqli->prepare("INSERT INTO users (name, email) VALUES(?, ?)");
//Associer les valeurs et exécuter la requête d&#39;insertion
$statement->bind_param('ss', $name, $email);
if($statement->execute()){
print "Salut " . $name . "!, votre adresse e-mail est ". $email;
}else{
print $mysqli->error;
}
}
?>