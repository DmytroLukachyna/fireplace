<?php 

$user_name = $_POST['user_name'];
$user_number = $_POST['user_number'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->Host = 'smtp.ukr.net';
$mail->SMTPAuth = true;
$mail->Username = 'email@addre.ss';
$mail->Password = 'passdeletedandrevoked';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('email@addre.ss', 'Kamin Sauna Group');
$mail->addAddress('email@addre.ss');
$mail->isHTML(true);
$mail->Subject = 'Письмо c Kamin Sauna Group';
$mail->Body    = '
	Пользователь сайта <b>Kamin Sauna Group</b> оставил заявку!<br><br> 
	Имя: ' . $user_name . ' <br>
	Номер телефона: ' . $user_number . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>