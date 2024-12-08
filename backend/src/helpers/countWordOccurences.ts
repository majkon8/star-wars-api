export default function countWordOccurrences(text: string): { word: string; count: number }[] {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const wordMap = new Map<string, number>();

    words.forEach(word => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });

    const result = Array.from(wordMap, ([word, count]) => ({ word, count }));

    return result;
}
