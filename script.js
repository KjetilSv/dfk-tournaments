// Set the generation time
const generationTime = new Date(document.getElementById('generation-time').dataset.time);

// Update the timer every second
setInterval(function() {
    const now = new Date();
    const diff = now - generationTime;
    
    // Calculate hours, minutes, seconds
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Format the time string
    const timeString = `Generated ${hours}h ${minutes}m ${seconds}s ago`;
    
    // Update the timer element
    document.getElementById('generation-timer').textContent = timeString;
}, 1000);

// Copy text to clipboard
function copyToClipboard(text) {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');
    
    // Remove the temporary element
    document.body.removeChild(tempInput);
    
    // Show toast notification
    const toast = document.getElementById('toast');
    toast.innerHTML = `Hero ID ${text} copied to clipboard!`;
    toast.className = 'show';
    
    // Hide toast after 3 seconds
    setTimeout(function(){ toast.className = toast.className.replace('show', ''); }, 3000);
}

// Hide a row
function hideRow(button) {
    const row = button.closest('tr');
    row.classList.add('hidden-row');
    
    // Add show all button if it doesn't exist
    let showAllBtn = document.getElementById('showAllBtn');
    if (!showAllBtn) {
        showAllBtn = document.createElement('button');
        showAllBtn.id = 'showAllBtn';
        showAllBtn.innerHTML = 'Show All Rows';
        showAllBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #7289da;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            z-index: 1000;
        `;
        showAllBtn.onclick = showAllRows;
        document.body.appendChild(showAllBtn);
    }
}

// Show all hidden rows
function showAllRows() {
    const hiddenRows = document.getElementsByClassName('hidden-row');
    while (hiddenRows.length > 0) {
        hiddenRows[0].classList.remove('hidden-row');
    }
    
    // Remove the show all button
    const showAllBtn = document.getElementById('showAllBtn');
    if (showAllBtn) {
        showAllBtn.remove();
    }
}

// Clear all rows in a table
function clearTable(button) {
    const table = button.closest('.card-body').querySelector('table');
    const rows = table.getElementsByTagName('tr');
    
    // Skip header row (index 0) and hide all other rows
    for (let i = 1; i < rows.length; i++) {
        rows[i].classList.add('hidden-row');
    }
    
    // Add show all button if it doesn't exist
    let showAllBtn = document.getElementById('showAllBtn');
    if (!showAllBtn) {
        showAllBtn = document.createElement('button');
        showAllBtn.id = 'showAllBtn';
        showAllBtn.innerHTML = 'Show All Rows';
        showAllBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: #7289da;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            z-index: 1000;
        `;
        showAllBtn.onclick = showAllRows;
        document.body.appendChild(showAllBtn);
    }
}
