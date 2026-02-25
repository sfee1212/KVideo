/**
 * Parses a video title to extract quality tags (e.g., [HD], [TS]) 
 * and return a cleaned title.
 */
export function parseVideoTitle(title: string): { cleanTitle: string, quality?: string } {
    // Regex to match tags in brackets at the start of the title
    // Example: "[HD] 利刃出鞘3" -> quality: "HD", cleanTitle: "利刃出鞘3"
    // Example: "利刃出鞘3 [HD]" -> quality: "HD", cleanTitle: "利刃出鞘3"

    const bracketRegex = /\[([^\]]+)\]/g;
    let quality: string | undefined;
    let cleanTitle = title;

    const match = bracketRegex.exec(title);

    if (match) {
        // Take the first bracket content as quality (usually what we want)
        quality = match[1];
        // Remove all brackets and their content from the title
        cleanTitle = title.replace(bracketRegex, '').trim();
    }

    return {
        cleanTitle: cleanTitle || title,
        quality
    };
}
