<?php
$trivia = [
  ["question" => "What is the capital of the Philippines?", "answer" => "Manila"],
  ["question" => "Who invented the World Wide Web?", "answer" => "Tim Berners-Lee"],
  ["question" => "What year did JavaScript first appear?", "answer" => "1995"]
];

$randomTrivia = $trivia[array_rand($trivia)];
header('Content-Type: application/json');
echo json_encode($randomTrivia);
?>
