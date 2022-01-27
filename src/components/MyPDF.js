import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 30,
    padding: 30,
    flexGrow: 3,
  },
});

// Create Document Component
export const MyDocument = ({ header, skill, experience, education }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1 Header</Text>
        <div className="row" style={{ width: "400px !important" }}>
          {header && (
            <ul>
              {header.map((d) => (
                <div key={d.id}>
                  <Text>{d.fullname}</Text>
                  <br />
                  <Text>{d.email}</Text>
                  <br />
                  <Text>{d.domain}</Text>
                  <br />
                  <Text>{d.phoneNumber}</Text>
                  <br />
                </div>
              ))}
            </ul>
          )}
        </div>
      </View>

      <br />
      <br />
      <br />

      <View style={styles.section}>
        <Text>Section #2 Skills</Text>
        <div className="row" style={{ width: "400px !important" }}>
          {skill && (
            <ul>
              {skill.map((s) => (
                <div key={s.id}>
                  <Text>{s.name}</Text>
                  <br />
                </div>
              ))}
            </ul>
          )}
        </div>
      </View>

      <br />
      <br />
      <br />

      <View style={styles.section}>
        <Text>Section #3 Work Experience</Text>
        <div className="row" style={{ width: "400px !important" }}>
          {experience && (
            <ul>
              {experience.map((ex) => (
                <div key={ex.id}>
                  <Text>{ex.role}</Text><br />
                  <Text>{ex.companyName}</Text><br />
                  <Text>{ex.beginningDate}</Text><br />
                  <Text>{ex.endingDate}</Text><br />
                  <br />
                </div>
              ))}
            </ul>
          )}
        </div>
      </View>

      <br />
      <br />
      <br />

      <View style={styles.section}>
        <Text>Section #4 Education</Text>
        <div className="row" style={{ width: "400px !important" }}>
          {education && (
            <ul>
              {education.map((ed) => (
                <div key={ed.id}>
                  <Text>{ed.schoolName}</Text><br />
                  <Text>{ed.degreeName}</Text><br />
                  <Text>{ed.beginningDate}</Text><br />
                  <Text>{ed.endingDate}</Text><br />
                  <br />
                </div>
              ))}
            </ul>
          )}
        </div>
      </View>
    </Page>
  </Document>
);
