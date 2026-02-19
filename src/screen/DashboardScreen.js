import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from "react";
import { useTranslation } from 'react-i18next';
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import SearchBar from "../components/SearchBar";
import HorizontalTickerList from "../components/HorizontalTickerList"
import TopSegmentTabs from "../components/TopSegmentTabs"
import SectionTitle from "../components/SectionTitle"
import MarketChartCard from "../components/MarketChartCard"
import MarketTableHeader from "../components/MarketTableHeader"
import MarketIndexList from "../components/MarketIndexList"
import NewsFilterChips from "../components/NewsFilterChips"
import NewsList from "../components/NewsList"

const DashboardScreen = () => {

  const {t} = useTranslation()

  const tickers = useMemo(
    () => [
      { title: "Soybean", value: "72,450", change: "+0.85%", isUp: true },
      { title: "Coffee", value: "22,020", change: "+0.78%", isUp: true },
      { title: "Soybean Meal", value: "₹62,450", change: "-0.40%", isUp: false },
    ],
    []
  );

  const indexes = useMemo(
    () => [
      { name: "Nifty 50", price: "72,450", change: "+0.85%", isUp: true },
      { name: "BSE Sensex", price: "84481.81", change: "-77.84%", isUp: false },
      { name: "Nifty Bank", price: "58,912.85", change: "-13.90%", isUp: false },
      { name: "Nifty IT", price: "25,815.55", change: "-0.01%", isUp: false },
      { name: "Nifty FMCG", price: "54,120.11", change: "+0.12%", isUp: true },
    ],
    []
  );

  const news = useMemo(
    () => [
      {
        id: "1",
        meta: "Market Update • 2h",
        title: "Soyabean Prices Increase Across North India Today",
        publisher: "Publisher Name",
        likes: 5,
        comments: 2,
      },
      {
        id: "2",
        meta: "Agri News • 5h",
        title: "Coffee Futures Show Volatility Amid Weather Concerns",
        publisher: "Publisher Name",
        likes: 11,
        comments: 4,
      },
      {
        id: "3",
        meta: "Expert View • 1d",
        title: "Market Outlook: Key Levels To Watch This Week",
        publisher: "Publisher Name",
        likes: 18,
        comments: 6,
      },
    ],
    []
  );

  return (
    <ScrollView>
      <Header />
      <WelcomeSection />
      <SearchBar />
      <View style={{ backgroundColor: "white" , marginTop:20 , borderTopLeftRadius:30,
        borderTopRightRadius:30}}>
        <HorizontalTickerList data={tickers} />
        <TopSegmentTabs/>
        <SectionTitle title={t("marketAction")} />
        <MarketChartCard title="Soybean" value="72,450" change="+0.85%" isUp />
        <MarketTableHeader />
        <MarketIndexList data={indexes} />
        <SectionTitle title={t(" Latest News Feed")} />
        <NewsFilterChips/>
        <NewsList data={news} />
       

      </View>

    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})