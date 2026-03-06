import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Svg, { Line, Rect, Text as SvgText } from "react-native-svg";

const { width } = Dimensions.get("window");

const CHART_WIDTH = width - 40;
const CHART_HEIGHT = 240;
const PADDING = 30;

// 🔹 X-axis (Days)
const candleData = [
  { day: "Mon", open: 2200, close: 2600, high: 2800, low: 2100 },
  { day: "Tue", open: 2600, close: 2400, high: 2700, low: 2300 },
  { day: "Wed", open: 2400, close: 3000, high: 3200, low: 2350 },
  { day: "Thu", open: 3000, close: 2800, high: 3100, low: 2700 },
  { day: "Fri", open: 2800, close: 3400, high: 3600, low: 2750 },
  { day: "Sat", open: 3400, close: 3200, high: 3500, low: 3100 },
  { day: "Sun", open: 3200, close: 3800, high: 4000, low: 3150 },
];

// 🔹 Y-axis labels
const yAxisLabels = [2000, 3000, 4000];

const MAX_PRICE = 4200;
const MIN_PRICE = 1800;

const scaleY = (price: number) =>
  PADDING +
  ((MAX_PRICE - price) / (MAX_PRICE - MIN_PRICE)) *
    (CHART_HEIGHT - PADDING * 2);

type Props = {
  visible: boolean;
  onClose: () => void;
};

const CandlestickChart = ({ visible, onClose }: Props) => {
  const candleWidth = 16;
  const spacing =
    (CHART_WIDTH - PADDING * 2) / candleData.length;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 bg-black/80 justify-end">
        <View className="bg-bunker rounded-t-3xl p-5 h-[65%]">

          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-text-primary text-lg font-semibold">
              Weekly Performance
            </Text>

            <TouchableOpacity onPress={onClose}>
              <Text className="text-text-muted">Close</Text>
            </TouchableOpacity>
          </View>

          {/* Chart */}
          <View className="items-center">
            <Svg width={CHART_WIDTH} height={CHART_HEIGHT}>
              {/* Y-axis labels + grid */}
              {yAxisLabels.map((price) => {
                const y = scaleY(price);
                return (
                  <React.Fragment key={price}>
                    <Line
                      x1={PADDING}
                      y1={y}
                      x2={CHART_WIDTH}
                      y2={y}
                      stroke="rgba(255,255,255,0.08)"
                    />
                    <SvgText
                      x={0}
                      y={y + 4}
                      fill="#9ca3af"
                      fontSize="10"
                    >
                      {price}
                    </SvgText>
                  </React.Fragment>
                );
              })}

              {/* Candles */}
              {candleData.map((candle, index) => {
                const x =
                  PADDING +
                  index * spacing +
                  spacing / 2;

                const openY = scaleY(candle.open);
                const closeY = scaleY(candle.close);
                const highY = scaleY(candle.high);
                const lowY = scaleY(candle.low);

                const bullish = candle.close > candle.open;
                const color = bullish ? "#22c55e" : "#ef4444";

                return (
                  <React.Fragment key={candle.day}>
                    {/* Wick */}
                    <Line
                      x1={x}
                      y1={highY}
                      x2={x}
                      y2={lowY}
                      stroke={color}
                      strokeWidth={2}
                    />

                    {/* Body */}
                    <Rect
                      x={x - candleWidth / 2}
                      y={Math.min(openY, closeY)}
                      width={candleWidth}
                      height={Math.max(
                        4,
                        Math.abs(openY - closeY)
                      )}
                      fill={color}
                      rx={2}
                    />

                    {/* X-axis label */}
                    <SvgText
                      x={x}
                      y={CHART_HEIGHT - 6}
                      fill="#9ca3af"
                      fontSize="10"
                      textAnchor="middle"
                    >
                      {candle.day}
                    </SvgText>
                  </React.Fragment>
                );
              })}
            </Svg>
          </View>

          {/* Footer */}
          <Text className="text-text-muted text-xs text-center mt-3">
            Candlestick view • Mon → Sun
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default CandlestickChart;
