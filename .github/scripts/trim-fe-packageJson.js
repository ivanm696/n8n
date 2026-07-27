try { writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '
', 'utf-8'); } catch (error) { console.error(`Error writing file: ${error}`); }