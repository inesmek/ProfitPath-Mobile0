import React, { useState } from 'react';
import { useRouter  } from 'expo-router';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ViewStyle,
    TextStyle,
    ImageStyle,
    Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

interface Investment {
    price: number;
    priceChange: number;
    chartData: {
        value: number;
        date: string;
    }[];
}

type TimeFrameType = '1D' | '1W' | '1M' | '1Y';

interface Styles {
    container: ViewStyle;
    header: ViewStyle;
    headerTitle: TextStyle;
    backButton: TextStyle;
    notificationIcon: TextStyle;
    stockInfo: ViewStyle;
    logo: ImageStyle;
    price: TextStyle;
    priceChange: TextStyle;
    positive: TextStyle;
    negative: TextStyle;
    timeFrameContainer: ViewStyle;
    timeFrame: ViewStyle;
    selectedTimeFrame: ViewStyle;
    timeFrameText: TextStyle;
    selectedTimeFrameText: TextStyle;
    buttonContainer: ViewStyle;
    buyButton: ViewStyle;
    sellButton: ViewStyle;
    buttonText: TextStyle;
    chartContainer: ViewStyle;
}

const InvestmentTracker: React.FC = () => {
    const [timeFrame, setTimeFrame] = useState<TimeFrameType>('1M');
    const [investment] = useState<Investment>({
        price: 5108.11,
        priceChange: -1.58,
        chartData: [
            { value: 2000, date: '2024-01-01' },
            { value: 2500, date: '2024-01-07' },
            { value: 2700, date: '2024-01-14' },
            { value: 2400, date: '2024-01-21' },
            { value: 2800, date: '2024-01-28' },
            { value: 3000, date: '2024-02-04' },
            
            
        ],
    });

    const timeFrames: TimeFrameType[] = ['1D', '1W', '1M', '1Y'];

    const formatDate = (dateString: string, timeFrame: TimeFrameType) => {
        const date = new Date(dateString);
        switch (timeFrame) {
            case '1D':
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            case '1W':
                return date.toLocaleDateString([], { weekday: 'short' });
            case '1M':
                return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
            case '1Y':
                return date.toLocaleDateString([], { month: 'short' });
            default:
                return date.toLocaleDateString();
        }
    };

    const handleBuy = (): void => {
        // Implement buy logic
    };

    const handleSell = (): void => {
        // Implement sell logic
    };

    const router = useRouter();

    const handleBack = () => {
      router.push("/");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Investments</Text>
                <TouchableOpacity>
                    <Text style={styles.notificationIcon}>🔔</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.stockInfo}>
                <Image
                    source={{ uri: 'https://logo.clearbit.com/amazon.com' }}
                    style={styles.logo}
                />
                <Text style={styles.price}>${investment.price.toFixed(2)}</Text>
                <Text style={[
                    styles.priceChange,
                    investment.priceChange >= 0 ? styles.positive : styles.negative
                ]}>
                    {investment.priceChange}% (-$58.00)
                </Text>
            </View>

            <View style={styles.timeFrameContainer}>
                {timeFrames.map((frame) => (
                    <TouchableOpacity
                        key={frame}
                        style={[styles.timeFrame, timeFrame === frame && styles.selectedTimeFrame]}
                        onPress={() => setTimeFrame(frame)}
                    >
                        <Text style={[
                            styles.timeFrameText,
                            timeFrame === frame && styles.selectedTimeFrameText
                        ]}>
                            {frame}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.chartContainer}>
                <LineChart
                    data={{
                        labels: investment.chartData.map(item => 
                            formatDate(item.date, timeFrame)
                        ),
                        datasets: [{
                            data: investment.chartData.map(item => item.value)
                        }]
                    }}
                    width={screenWidth - 60}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientTo: '#ffffff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(30, 136, 229, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "#1E88E5"
                        },
                        xAxisLabel: () => '',
                        yAxisLabel: '$',
                        yAxisInterval: 1,
                        formatXLabel: (label) => label.length > 4 ? label.substring(0, 4) : label,
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        elevation: 3,
                    }}
                    withHorizontalLabels={true}
                    withVerticalLabels={true}
                    withDots={true}
                    withInnerLines={true}
                    withOuterLines={true}
                    withVerticalLines={false}
                    yAxisInterval={4}
                    horizontalLabelRotation={-45}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.buyButton} 
                    onPress={handleBuy}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.sellButton} 
                    onPress={handleSell}
                    activeOpacity={0.8}
                >
                    <Text style={[styles.buttonText, { color: '#1E88E5' }]}>Sell</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 50,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    backButton: {
        fontSize: 24,
        color: '#1E88E5',
    },
    notificationIcon: {
        fontSize: 20,
        color: '#1E88E5',
    },
    stockInfo: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 12,
        elevation: 3,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    priceChange: {
        fontSize: 16,
        fontWeight: '600',
    },
    positive: {
        color: '#4CAF50',
    },
    negative: {
        color: '#F44336',
    },
    timeFrameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    timeFrame: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        elevation: 1,
    },
    selectedTimeFrame: {
        backgroundColor: '#1E88E5',
        elevation: 3,
    },
    timeFrameText: {
        color: '#666',
        fontWeight: '600',
    },
    selectedTimeFrameText: {
        color: '#fff',
    },
    chartContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 12,
        elevation: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    buyButton: {
        flex: 1,
        backgroundColor: '#1E88E5',
        padding: 15,
        borderRadius: 25,
        marginRight: 8,
        alignItems: 'center',
        elevation: 2,
    },
    sellButton: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        marginLeft: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E88E5',
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default InvestmentTracker;