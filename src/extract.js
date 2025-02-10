const tweets = []; 

// Select all rows inside the table (excluding the header)
document.querySelectorAll("table tr").forEach(row => {
    const cells = row.querySelectorAll("td"); // Select all cells in the row
    if (cells.length > 0) { 
        tweets.push({
            time: cells[0]?.innerText.trim(),  // Extract time (first column)
            content: cells[1]?.innerText.trim(), // Extract content (second column)
            impressions: cells[2]?.innerText.trim(), // Extract impressions (third column)
            likes: cells[3]?.innerText.trim(), // Extract likes (fourth column)
            retweets: cells[4]?.innerText.trim(), // Extract retweets (fifth column)
            replies: cells[5]?.innerText.trim() // Extract replies (sixth column)
        });
    }
});

// Print the extracted tweets
console.log(JSON.stringify(tweets, null, 2));
