<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dobijanje podataka iz forme
    $customer = $_POST["customer"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    // Postavke za povezivanje sa bazom podataka
    $servername = "localhost"; 
    $username = "root"; 
    $password = "";
    $dbname = "ElabBaza";

    // Povezivanje sa bazom podataka
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Provera konekcije
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // SQL upit za unos podataka u tabelu
    $sql = "INSERT INTO PodaciForma (customer, email, comment) VALUES ('$customer', '$email', '$comment')";

    if ($conn->query($sql) === TRUE) {
        echo "Podaci su uspešno sačuvani u bazi.";

        // Kreirajte asocijativni niz sa novim podacima
        $new_data = array(
            "customer" => $customer,
            "email" => $email,
            "comment" => $comment
        );

        // Čitanje postojećih podataka iz JSON fajla
        $existing_data = json_decode(file_get_contents("/Applications/XAMPP/xamppfiles/htdocs/ElabSajt/messages.json"), true);

        // Dodavanje novih podataka u postojeće podatke
        $existing_data[] = $new_data;

        // Konvertovanje celog niza u JSON format sa formatiranjem za bolju preglednost
        $json_data = json_encode($existing_data, JSON_PRETTY_PRINT);

        // Čuvanje JSON podataka u datoteku (messages.json)
        file_put_contents("/Applications/XAMPP/xamppfiles/htdocs/ElabSajt/messages.json", $json_data);
    } else {
        echo "Greška prilikom upita: " . $conn->error;
    }

    // Zatvaranje konekcije
    $conn->close();
} else {
    echo "Neispravan zahtev.";
}
?>
