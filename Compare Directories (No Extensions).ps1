# Compares the contents of two folders without file extensions

# Retrieves file paths from user input
$folder1Path = Read-Host -Prompt "Enter the first file path"
$folder2Path = Read-Host -Prompt "Enter the second file path"

# Retrieves the names of all files and removes file extensions
$folder1Names = Get-ChildItem $folder1Path -file -filter "*.*" | group Basename
$folder2Names = $pc = Get-ChildItem $folder2Path -file -filter "*.*" | group Basename

# Compares the contents of both folders and outputs the results
Compare-Object -ReferenceObject $folder1Names.name -DifferenceObject $folder2Names.name