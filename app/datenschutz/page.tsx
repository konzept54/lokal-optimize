import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Local Optimize gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] min-h-screen bg-brand-dark">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-black text-white mb-10" style={{ fontFamily: 'var(--font-display)' }}>
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm text-brand-cyan/70 leading-relaxed">

            <section>
              <h2 className="text-brand-light font-bold text-base mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-brand-light font-semibold text-sm mb-1">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Datenerfassung auf dieser Website
              </h3>
              <p>
                <strong className="text-brand-light/80">
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p className="mt-3">
                <strong className="text-brand-light/80">Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch
                Eingabe in das Kontaktformular. Andere Daten werden automatisch oder nach Ihrer
                Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs).
              </p>
              <p className="mt-3">
                <strong className="text-brand-light/80">Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="mt-3">
                <strong className="text-brand-light/80">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-brand-light font-bold text-base mb-2">
                2. Hosting
              </h2>
              <p>
                Wir hosten die Inhalte unserer Website bei einem externen Dienstleister (Hoster). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                sonstige Daten handeln, die über eine Website generiert werden.
              </p>
              <p className="mt-3">
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
                sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
                professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-brand-light font-bold text-base mb-2">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="text-brand-light font-semibold text-sm mb-1">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-3">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
                sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Friederike Holzhauser<br />
                Local Optimize<br />
                Badstr. 16<br />
                77866 Rheinau<br /><br />
                Telefon:{' '}
                <a href="tel:+4978449183272" className="hover:text-brand-cyan transition-colors">
                  +49 7844 918 32 72
                </a>
                <br />
                E-Mail:{' '}
                <a href="mailto:info@localoptimize.de" className="hover:text-brand-cyan transition-colors">
                  info@localoptimize.de
                </a>
              </p>
              <p className="mt-3">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
                eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Recht auf Datenübertragbarkeit
              </h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
                eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
                gängigen, maschinenlesbaren Format aushändigen zu lassen.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und
                an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Auskunft, Löschung und Berichtigung
              </h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-brand-light font-bold text-base mb-2">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="text-brand-light font-semibold text-sm mb-1">
                Server-Log-Dateien
              </h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
                Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
                erfasst werden.
              </p>

              <h3 className="text-brand-light font-semibold text-sm mt-4 mb-1">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zum Zwecke der
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="mt-3">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
                die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
                Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-brand-light font-bold text-base mb-2">
                5. Analyse-Tools und Werbung
              </h2>

              <h3 className="text-brand-light font-semibold text-sm mb-1">Google Analytics</h3>
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist
                die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mt-3">
                Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher
                zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z.
                B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers.
                Diese Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des
                Websitebesuchers zugeordnet.
              </p>
              <p className="mt-3">
                Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und
                Klicks aufzeichnen. Ferner verwendet Google Analytics verschiedene Modellierungsansätze,
                um die erfassten Datensätze zu ergänzen, und setzt Machine-Learning-Technologien bei
                der Datenanalyse ein.
              </p>
              <p className="mt-3">
                Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke
                der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting).
                Die von Google erfassten Informationen über die Benutzung dieser Website werden in der
                Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="mt-3">
                Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des
                Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
                jederzeit widerrufbar.
              </p>
              <p className="mt-3">
                <strong className="text-brand-light/80">IP-Anonymisierung</strong>
                <br />
                Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird
                Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in
                anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der
                Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
                einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des
                Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der
                Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um
                weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen
                gegenüber dem Websitebetreiber zu erbringen.
              </p>
              <p className="mt-3">
                Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen
                die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google
                Analytics vollständig um.
              </p>
            </section>

            <section>
              <h2 className="text-brand-light font-bold text-base mb-2">
                6. Plugins und Tools
              </h2>

              <h3 className="text-brand-light font-semibold text-sm mb-1">Google Web Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts,
                die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine
                Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
              <p className="mt-3">
                Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                >
                  https://developers.google.com/fonts/faq
                </a>{' '}
                und in der Datenschutzerklärung von Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cyan hover:text-brand-cyan/80 transition-colors"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
