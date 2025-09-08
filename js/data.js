// Complete New Hampshire City Dataset with enriched data
const nhFullDataset = [
    // Major cities with significant gaps
    { city: "Manchester", lat: 42.9956, lng: -71.4548, nfirs: 7, rc: 43, matched: 1, population: 115644, year2021: {nfirs: 3, rc: 20}, year2022: {nfirs: 4, rc: 23} },
    { city: "Nashua", lat: 42.7654, lng: -71.4676, nfirs: 8, rc: 39, matched: 2, population: 91322, year2021: {nfirs: 4, rc: 18}, year2022: {nfirs: 4, rc: 21} },
    { city: "Concord", lat: 43.2081, lng: -71.5376, nfirs: 6, rc: 28, matched: 1, population: 43976, year2021: {nfirs: 3, rc: 13}, year2022: {nfirs: 3, rc: 15} },
    { city: "Rochester", lat: 43.3045, lng: -70.9759, nfirs: 2, rc: 24, matched: 0, population: 32492, year2021: {nfirs: 1, rc: 11}, year2022: {nfirs: 1, rc: 13} },
    { city: "Dover", lat: 43.1979, lng: -70.8737, nfirs: 3, rc: 18, matched: 1, population: 32741, year2021: {nfirs: 2, rc: 8}, year2022: {nfirs: 1, rc: 10} },
    { city: "Keene", lat: 42.9337, lng: -72.2781, nfirs: 4, rc: 15, matched: 1, population: 23409, year2021: {nfirs: 2, rc: 7}, year2022: {nfirs: 2, rc: 8} },
    { city: "Portsmouth", lat: 43.0718, lng: -70.7626, nfirs: 5, rc: 14, matched: 2, population: 23011, year2021: {nfirs: 3, rc: 6}, year2022: {nfirs: 2, rc: 8} },
    { city: "Laconia", lat: 43.5279, lng: -71.4704, nfirs: 3, rc: 12, matched: 1, population: 16871, year2021: {nfirs: 1, rc: 5}, year2022: {nfirs: 2, rc: 7} },
    { city: "Lebanon", lat: 43.6423, lng: -72.2518, nfirs: 2, rc: 11, matched: 0, population: 14282, year2021: {nfirs: 1, rc: 5}, year2022: {nfirs: 1, rc: 6} },
    { city: "Claremont", lat: 43.3765, lng: -72.3465, nfirs: 1, rc: 10, matched: 0, population: 12949, year2021: {nfirs: 0, rc: 4}, year2022: {nfirs: 1, rc: 6} },
    
    // Perfect match cities
    { city: "Berlin", lat: 44.4687, lng: -71.1851, nfirs: 5, rc: 5, matched: 5, population: 10051, year2021: {nfirs: 2, rc: 2}, year2022: {nfirs: 3, rc: 3} },
    { city: "Allenstown", lat: 43.1476, lng: -71.3831, nfirs: 2, rc: 2, matched: 2, population: 4707, year2021: {nfirs: 1, rc: 1}, year2022: {nfirs: 1, rc: 1} },
    { city: "Chichester", lat: 43.2523, lng: -71.4001, nfirs: 1, rc: 1, matched: 1, population: 2665, year2021: {nfirs: 0, rc: 0}, year2022: {nfirs: 1, rc: 1} },
    { city: "Dunbarton", lat: 43.1076, lng: -71.5965, nfirs: 1, rc: 1, matched: 1, population: 3005, year2021: {nfirs: 1, rc: 1}, year2022: {nfirs: 0, rc: 0} },
    
    // NFIRS-only cities (potential missed RC services)
    { city: "Salem", lat: 42.7886, lng: -71.2009, nfirs: 18, rc: 0, matched: 0, population: 30089, year2021: {nfirs: 8, rc: 0}, year2022: {nfirs: 10, rc: 0} },
    { city: "Derry", lat: 42.8806, lng: -71.3273, nfirs: 22, rc: 0, matched: 0, population: 34317, year2021: {nfirs: 10, rc: 0}, year2022: {nfirs: 12, rc: 0} },
    { city: "Hudson", lat: 42.7651, lng: -71.4398, nfirs: 14, rc: 0, matched: 0, population: 25394, year2021: {nfirs: 6, rc: 0}, year2022: {nfirs: 8, rc: 0} },
    { city: "Merrimack", lat: 42.8651, lng: -71.4934, nfirs: 16, rc: 0, matched: 0, population: 26632, year2021: {nfirs: 7, rc: 0}, year2022: {nfirs: 9, rc: 0} },
    { city: "Londonderry", lat: 42.8651, lng: -71.3742, nfirs: 19, rc: 0, matched: 0, population: 25826, year2021: {nfirs: 9, rc: 0}, year2022: {nfirs: 10, rc: 0} },
    { city: "Bedford", lat: 42.9465, lng: -71.5159, nfirs: 12, rc: 0, matched: 0, population: 23322, year2021: {nfirs: 5, rc: 0}, year2022: {nfirs: 7, rc: 0} },
    
    // RC-only cities (potential unreported to NFIRS)
    { city: "Somersworth", lat: 43.2618, lng: -70.8656, nfirs: 0, rc: 8, matched: 0, population: 11766, year2021: {nfirs: 0, rc: 3}, year2022: {nfirs: 0, rc: 5} },
    { city: "Franklin", lat: 43.4445, lng: -71.6473, nfirs: 0, rc: 7, matched: 0, population: 8741, year2021: {nfirs: 0, rc: 3}, year2022: {nfirs: 0, rc: 4} },
    { city: "Exeter", lat: 42.9814, lng: -70.9478, nfirs: 0, rc: 9, matched: 0, population: 16049, year2021: {nfirs: 0, rc: 4}, year2022: {nfirs: 0, rc: 5} },
    { city: "Hampton", lat: 42.9376, lng: -70.8389, nfirs: 0, rc: 6, matched: 0, population: 16214, year2021: {nfirs: 0, rc: 2}, year2022: {nfirs: 0, rc: 4} },
    { city: "Milford", lat: 42.8354, lng: -71.6489, nfirs: 0, rc: 8, matched: 0, population: 16131, year2021: {nfirs: 0, rc: 3}, year2022: {nfirs: 0, rc: 5} },
    
    // Additional cities with various match rates
    { city: "Windham", lat: 42.8001, lng: -71.3045, nfirs: 10, rc: 3, matched: 1, population: 15817, year2021: {nfirs: 4, rc: 1}, year2022: {nfirs: 6, rc: 2} },
    { city: "Hooksett", lat: 43.0976, lng: -71.4634, nfirs: 8, rc: 5, matched: 2, population: 14871, year2021: {nfirs: 3, rc: 2}, year2022: {nfirs: 5, rc: 3} },
    { city: "Pelham", lat: 42.7337, lng: -71.3245, nfirs: 7, rc: 2, matched: 1, population: 14222, year2021: {nfirs: 3, rc: 1}, year2022: {nfirs: 4, rc: 1} },
    { city: "Goffstown", lat: 43.0204, lng: -71.6003, nfirs: 9, rc: 4, matched: 2, population: 18577, year2021: {nfirs: 4, rc: 2}, year2022: {nfirs: 5, rc: 2} },
    { city: "Belmont", lat: 43.4459, lng: -71.4778, nfirs: 3, rc: 2, matched: 1, population: 7314, year2021: {nfirs: 1, rc: 1}, year2022: {nfirs: 2, rc: 1} },
    { city: "Stratham", lat: 43.0031, lng: -70.8995, nfirs: 4, rc: 1, matched: 0, population: 7669, year2021: {nfirs: 2, rc: 0}, year2022: {nfirs: 2, rc: 1} },
    { city: "Seabrook", lat: 42.8948, lng: -70.8711, nfirs: 6, rc: 3, matched: 1, population: 9044, year2021: {nfirs: 3, rc: 1}, year2022: {nfirs: 3, rc: 2} },
    { city: "Bow", lat: 43.1387, lng: -71.5448, nfirs: 5, rc: 2, matched: 1, population: 8229, year2021: {nfirs: 2, rc: 1}, year2022: {nfirs: 3, rc: 1} },
    { city: "Hanover", lat: 43.7022, lng: -72.2896, nfirs: 2, rc: 4, matched: 1, population: 11870, year2021: {nfirs: 1, rc: 2}, year2022: {nfirs: 1, rc: 2} },
    { city: "Newmarket", lat: 43.0826, lng: -70.9350, nfirs: 3, rc: 5, matched: 1, population: 9430, year2021: {nfirs: 1, rc: 2}, year2022: {nfirs: 2, rc: 3} },
    { city: "Barrington", lat: 43.2229, lng: -71.0456, nfirs: 4, rc: 3, matched: 1, population: 9326, year2021: {nfirs: 2, rc: 1}, year2022: {nfirs: 2, rc: 2} },
    { city: "Plaistow", lat: 42.8362, lng: -71.0948, nfirs: 5, rc: 2, matched: 1, population: 7609, year2021: {nfirs: 2, rc: 1}, year2022: {nfirs: 3, rc: 1} },
    { city: "Gilford", lat: 43.5476, lng: -71.4067, nfirs: 3, rc: 4, matched: 1, population: 7699, year2021: {nfirs: 1, rc: 2}, year2022: {nfirs: 2, rc: 2} },
    { city: "Raymond", lat: 43.0365, lng: -71.1834, nfirs: 6, rc: 3, matched: 1, population: 10684, year2021: {nfirs: 3, rc: 1}, year2022: {nfirs: 3, rc: 2} },
    { city: "Conway", lat: 43.9790, lng: -71.1201, nfirs: 4, rc: 6, matched: 2, population: 9822, year2021: {nfirs: 2, rc: 3}, year2022: {nfirs: 2, rc: 3} },
    { city: "Plymouth", lat: 43.7573, lng: -71.6881, nfirs: 2, rc: 5, matched: 1, population: 6682, year2021: {nfirs: 1, rc: 2}, year2022: {nfirs: 1, rc: 3} },
    { city: "Hollis", lat: 42.7431, lng: -71.5914, nfirs: 3, rc: 1, matched: 0, population: 8342, year2021: {nfirs: 1, rc: 0}, year2022: {nfirs: 2, rc: 1} },
    { city: "Weare", lat: 43.0981, lng: -71.7309, nfirs: 4, rc: 2, matched: 1, population: 9092, year2021: {nfirs: 2, rc: 1}, year2022: {nfirs: 2, rc: 1} },
    { city: "Durham", lat: 43.1340, lng: -70.9262, nfirs: 1, rc: 3, matched: 0, population: 15490, year2021: {nfirs: 0, rc: 1}, year2022: {nfirs: 1, rc: 2} },
    { city: "Litchfield", lat: 42.8445, lng: -71.4701, nfirs: 3, rc: 1, matched: 0, population: 8478, year2021: {nfirs: 1, rc: 0}, year2022: {nfirs: 2, rc: 1} }
];

// Calculate categories and statistics
function categorizeCity(city) {
    const matchRate = city.nfirs > 0 ? (city.matched / Math.min(city.nfirs, city.rc)) * 100 : 0;
    
    if (city.nfirs === 0 && city.rc > 0) {
        return { category: 'RC Only', color: '#3B82F6', severity: 'high' };
    } else if (city.rc === 0 && city.nfirs > 0) {
        return { category: 'NFIRS Only', color: '#EF4444', severity: 'high' };
    } else if (matchRate === 100) {
        return { category: 'Perfect Match', color: '#10B981', severity: 'none' };
    } else if (matchRate >= 50) {
        return { category: 'Partial Match', color: '#F59E0B', severity: 'low' };
    } else if (matchRate > 0) {
        return { category: 'Poor Match', color: '#F97316', severity: 'medium' };
    } else {
        return { category: 'No Match', color: '#DC2626', severity: 'critical' };
    }
}

// Export functions for GeoJSON and CSV
function exportToGeoJSON() {
    const features = nhFullDataset.map(city => {
        const category = categorizeCity(city);
        return {
            type: "Feature",
            properties: {
                name: city.city,
                nfirs_count: city.nfirs,
                rc_count: city.rc,
                matched_count: city.matched,
                population: city.population,
                category: category.category,
                severity: category.severity,
                match_rate: city.nfirs > 0 ? ((city.matched / Math.min(city.nfirs, city.rc)) * 100).toFixed(1) : 0,
                gap_count: Math.abs(city.nfirs - city.rc),
                year_2021_nfirs: city.year2021.nfirs,
                year_2021_rc: city.year2021.rc,
                year_2022_nfirs: city.year2022.nfirs,
                year_2022_rc: city.year2022.rc
            },
            geometry: {
                type: "Point",
                coordinates: [city.lng, city.lat]
            }
        };
    });

    return {
        type: "FeatureCollection",
        features: features
    };
}

function exportToCSV() {
    const headers = [
        'City', 'Latitude', 'Longitude', 'Population',
        'NFIRS_Total', 'RC_Total', 'Matched', 'Match_Rate',
        'Category', 'Severity', 'Gap_Count',
        '2021_NFIRS', '2021_RC', '2022_NFIRS', '2022_RC'
    ];
    
    const rows = nhFullDataset.map(city => {
        const category = categorizeCity(city);
        const matchRate = city.nfirs > 0 ? ((city.matched / Math.min(city.nfirs, city.rc)) * 100).toFixed(1) : 0;
        
        return [
            city.city, city.lat, city.lng, city.population,
            city.nfirs, city.rc, city.matched, matchRate,
            category.category, category.severity, Math.abs(city.nfirs - city.rc),
            city.year2021.nfirs, city.year2021.rc,
            city.year2022.nfirs, city.year2022.rc
        ];
    });
    
    const csvContent = [headers, ...rows]
        .map(row => row.join(','))
        .join('\n');
    
    return csvContent;
}

// City profile generator
function generateCityProfile(cityName) {
    const city = nhFullDataset.find(c => c.city === cityName);
    if (!city) return null;
    
    const category = categorizeCity(city);
    const matchRate = city.nfirs > 0 ? ((city.matched / Math.min(city.nfirs, city.rc)) * 100).toFixed(1) : 0;
    const gapCount = Math.abs(city.nfirs - city.rc);
    
    let interpretation = '';
    if (category.category === 'RC Only') {
        interpretation = 'Red Cross is actively providing services, but fire department reports are not being captured in NFIRS. This suggests a significant reporting gap.';
    } else if (category.category === 'NFIRS Only') {
        interpretation = 'Fire incidents are being reported to NFIRS, but Red Cross services appear to be missing. This represents a potential service delivery gap.';
    } else if (category.category === 'Perfect Match') {
        interpretation = 'Excellent coordination between fire department reporting and Red Cross services. This city serves as a best practice model.';
    } else if (category.category === 'Partial Match') {
        interpretation = 'Moderate coordination exists, but there is room for improvement in aligning fire department and Red Cross data.';
    } else {
        interpretation = 'Critical gap detected. Immediate investigation needed to understand the disconnect between fire reporting and Red Cross services.';
    }
    
    return {
        city: city.city,
        population: city.population.toLocaleString(),
        nfirs: city.nfirs,
        rc: city.rc,
        matched: city.matched,
        matchRate: matchRate + '%',
        category: category.category,
        severity: category.severity,
        gapCount: gapCount,
        interpretation: interpretation,
        yearOverYear: {
            nfirs2021: city.year2021.nfirs,
            rc2021: city.year2021.rc,
            nfirs2022: city.year2022.nfirs,
            rc2022: city.year2022.rc,
            trend: city.year2022.nfirs > city.year2021.nfirs ? 'increasing' : 'stable'
        }
    };
}

// Summary statistics
const summaryStats = {
    totalCities: nhFullDataset.length,
    totalNFIRS: nhFullDataset.reduce((sum, city) => sum + city.nfirs, 0),
    totalRC: nhFullDataset.reduce((sum, city) => sum + city.rc, 0),
    totalMatched: nhFullDataset.reduce((sum, city) => sum + city.matched, 0),
    perfectMatches: nhFullDataset.filter(city => categorizeCity(city).category === 'Perfect Match').length,
    nfirsOnly: nhFullDataset.filter(city => categorizeCity(city).category === 'NFIRS Only').length,
    rcOnly: nhFullDataset.filter(city => categorizeCity(city).category === 'RC Only').length,
    criticalGaps: nhFullDataset.filter(city => categorizeCity(city).severity === 'critical').length,
    overallMatchRate: function() {
        const total = Math.min(this.totalNFIRS, this.totalRC);
        return total > 0 ? ((this.totalMatched / total) * 100).toFixed(1) : 0;
    }
};