<?php
$jokes = [
  ["setup" => "Why don't programmers like nature?", "punchline" => "Too many bugs!"],
  ["setup" => "Why do Java developers wear glasses?", "punchline" => "Because they don’t C#!"],
  ["setup" => "What’s a programmer’s favorite hangout place?", "punchline" => "The Foo Bar."]
];

$randomJoke = $jokes[array_rand($jokes)];
header('Content-Type: application/json');
echo json_encode($randomJoke);
?>
