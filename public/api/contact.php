<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$phone   = trim($input['phone'] ?? '');
$message = trim($input['message'] ?? '');
$callback = !empty($input['callback']);

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Name, E-Mail und Nachricht sind erforderlich.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

$to = 'info@freshforyou.org';
$subject = 'Neue Kontaktanfrage von ' . $name;

$body  = "Neue Kontaktanfrage über die Website\n";
$body .= "====================================\n\n";
$body .= "Name: $name\n";
$body .= "E-Mail: $email\n";
if ($phone !== '') {
    $body .= "Telefon: $phone\n";
}
$body .= "Rückruf gewünscht: " . ($callback ? 'Ja' : 'Nein') . "\n\n";
$body .= "Nachricht:\n";
$body .= $message . "\n";

$headers  = "From: \"Fresh4You Website\" <info@freshforyou.org>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Nachricht konnte nicht gesendet werden.']);
}
