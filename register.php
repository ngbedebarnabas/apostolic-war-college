
<?php
// Database connection details
$dbHost = 'localhost';
$dbName = 'u499616432_awc';
$dbUser = 'u499616432_awc';
$dbPass = 'Apostolicwc@2025';

// Get the JSON data from the request
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

// Validate required fields are present
$requiredFields = [
    'title', 'firstName', 'lastName', 'gender', 'age', 'maritalStatus',
    'email', 'phoneNumber', 'address', 'bornAgain', 'churchName',
    'isMinister', 'isPioneer', 'churchRole'
];

$missingFields = [];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Required fields are missing: ' . implode(', ', $missingFields)
    ]);
    exit;
}

// Special validation for conditional fields
if ($data['isMinister'] === 'Yes' && empty($data['denominationName'])) {
    $data['denominationName'] = 'Not provided';
}

if ($data['isPioneer'] === 'Yes' && empty($data['ministryName'])) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Ministry name is required when you indicate you are a pioneer'
    ]);
    exit;
}

// Connect to the database
try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
    exit;
}

// Prepare SQL statement
$sql = "INSERT INTO registrations (
    title, first_name, middle_name, last_name, gender, age_group, 
    marital_status, email, phone_number, address, born_again, 
    church_name, is_minister, denomination_name, is_pioneer, 
    ministry_name, church_role, registration_date
) VALUES (
    :title, :firstName, :middleName, :lastName, :gender, :age,
    :maritalStatus, :email, :phoneNumber, :address, :bornAgain,
    :churchName, :isMinister, :denominationName, :isPioneer,
    :ministryName, :churchRole, NOW()
)";

try {
    $stmt = $pdo->prepare($sql);
    
    // Bind parameters
    $stmt->bindParam(':title', $data['title']);
    $stmt->bindParam(':firstName', $data['firstName']);
    $stmt->bindParam(':middleName', $data['middleName']);
    $stmt->bindParam(':lastName', $data['lastName']);
    $stmt->bindParam(':gender', $data['gender']);
    $stmt->bindParam(':age', $data['age']);
    $stmt->bindParam(':maritalStatus', $data['maritalStatus']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':phoneNumber', $data['phoneNumber']);
    $stmt->bindParam(':address', $data['address']);
    $stmt->bindParam(':bornAgain', $data['bornAgain']);
    $stmt->bindParam(':churchName', $data['churchName']);
    $stmt->bindParam(':isMinister', $data['isMinister']);
    $stmt->bindParam(':denominationName', $data['denominationName']);
    $stmt->bindParam(':isPioneer', $data['isPioneer']);
    $stmt->bindParam(':ministryName', $data['ministryName']);
    $stmt->bindParam(':churchRole', $data['churchRole']);
    
    // Execute the statement
    $stmt->execute();
    
    // Send success response
    header('Content-Type: application/json');
    echo json_encode([
        'success' => true,
        'message' => 'Registration submitted successfully'
    ]);
} catch (PDOException $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Registration failed: ' . $e->getMessage()
    ]);
}
?>
