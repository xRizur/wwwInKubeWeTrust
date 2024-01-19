# Zapisujemy ścieżkę do głównego folderu
$MainDir = Get-Location

# Uruchamiamy serwisy w tle
Start-Job -ScriptBlock { Set-Location C:\ścieżka\do\frontend; npm run serve }
Start-Job -ScriptBlock { Set-Location C:\ścieżka\do\backend\Users; node server.js }
Start-Job -ScriptBlock { Set-Location C:\ścieżka\do\backend\CustomerService; node server.js }

# Czekamy na zakończenie wszystkich procesów w tle
Get-Job | Wait-Job

# Opcjonalnie: Powrót do głównego folderu
Set-Location $MainDir
