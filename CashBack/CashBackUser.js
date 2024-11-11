document.addEventListener('DOMContentLoaded', () => {
    const userCampaigns = JSON.parse(localStorage.getItem('userCampaigns')) || [];
    const rootContainer = document.querySelector('.root');

    userCampaigns.forEach(camp => {
        const campaignDiv = document.createElement('div');
        campaignDiv.className = 'whitecontainer1';

        const title = document.createElement('h3');
        title.textContent = camp.Nome;

        const description = document.createElement('p');
        description.classList.add('sc');
        description.textContent = camp.Desc;

        const progressContainer = document.createElement('div');
        progressContainer.className = 'graycontainer';

        const progressBar = document.createElement('div');
        progressBar.className = 'greencontainer1';
        progressBar.style.width = '0%';

        const percentageText = document.createElement('span');
        percentageText.className = 'percentual1';
        percentageText.textContent = '0%';

        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(percentageText);

        campaignDiv.appendChild(title);
        campaignDiv.appendChild(description);
        campaignDiv.appendChild(progressContainer);

        rootContainer.appendChild(campaignDiv);
    });
});
