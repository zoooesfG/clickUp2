"use server"
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const PDFFile = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* <Image src='./taylor.png'/> */}
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      {/* <Text render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}/> */}
    </Page>
  </Document>
);
export default PDFFile