function nextStep(step) {
    const currentStepEl = document.getElementById(`step-${step}`);
    const nextStepEl = document.getElementById(`step-${step + 1}`);
    const progressBar = document.getElementById('progress-bar');

    if (currentStepEl && nextStepEl) {
        currentStepEl.classList.remove('active');
        nextStepEl.classList.add('active');

        // Update Progress (Steps 1-3 lead to 4 which is loading)
        const progress = ((step + 1) / 4) * 100;
        progressBar.style.width = `${progress}%`;

        // If next step is loading (step 4)
        if (step + 1 === 4) {
            setTimeout(() => {
                nextStepEl.classList.remove('active');
                document.getElementById('final-step').classList.add('active');
                document.querySelector('.progress-container').style.display = 'none';
            }, 1500);
        }
    }
}

function claimOffer() {
    window.location.href = 'https://trksy.org/aff_c?offer_id=1913&aff_id=32911';
}
