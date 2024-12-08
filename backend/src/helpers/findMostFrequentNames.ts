export default function findMostFrequentNames(text: string, names: string[]): string[] {
    const lowerCaseText = text.toLowerCase();
    const nameCounts: Record<string, number> = {};

    names.forEach(name => {
        const regExp = new RegExp(name, 'gi');

        nameCounts[name] = (lowerCaseText.match(regExp) || []).length;
    });

    let maxCount = 0;

    for (const [_, count] of Object.entries(nameCounts)) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return Object.keys(nameCounts).filter(name => nameCounts[name] === maxCount);
}
