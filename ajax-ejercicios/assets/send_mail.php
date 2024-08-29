<?php
    if(isset($_POST)){
        error_reporting(0);
        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $comments = $_POST["comments"];
        
        $domain = $_SERVER["HTTP_HOST"];

        $to = "alejandroqm832@gmail.com";
        $subject = "Contacto desde el formulario del sitio $domain: $subject";
        $message = "
            <p>
                Datos enviados desde el formulario del sitio <b>$domain</b>
            </p>
            <ul>
                <li>Nombre: <b>$name</b></li>
                <li>Email: <b>$email</b></li>
                <li>Asunto: $subject</li>
                <li>Comentarios: $domain</li>
            </ul>
        ";
        $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html;"."charset=utf-8\r\n"."From: Envío Automático No Responder <no-reply@$domain>";
        $send_mail = mail($to, $subject, $message, $headers);
        if($send_mail){
            $respuesta = [
                "error" => false,
                "message" => "Tus datos han sido enviados"
            ];
        }
        else{
            $respuesta = [
                "error" => true,
                "message" => "Error al enviar tus datos"
            ];
        }
        header("Access-Control-Allow-Origin: *"); //para no tener problemas con el CORS
        header('Content-type: application/json');
        echo json_encode($respuesta);
        exit;
    }
?>