let stage = 0;
    const instructions = [
        "Step 1: Creating a repository. Click Next to continue.",
        "Step 2: Creating a new branch. Use 'git branch new-feature'. Click Next.",
        "Step 3: Committing changes. Use 'git commit -m' to add a message. Click Next.",
        "Step 4: Pushing to GitHub. Use 'git push' to upload. Congratulations!"
    ];

    document.getElementById('startBtn').addEventListener('click', function() {
        this.classList.add('hidden');
        document.getElementById('nextBtn').classList.remove('hidden');
        document.getElementById('instruction').textContent = instructions[stage];
        document.body.style.backgroundColor = "#e0ffe0"; // Color change for progress
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        stage++;
        if (stage < instructions.length) {
            document.getElementById('instruction').textContent = instructions[stage];
        } else {
            document.getElementById('instruction').textContent = "You have completed the game!";
            document.getElementById('instruction').classList.add('completed');
            this.classList.add('hidden');
            document.body.style.backgroundColor = "#d1ffd6"; // Completed background color
        }
    });