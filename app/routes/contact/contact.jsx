import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';
import { Link } from '~/components/link';
import { Table, TableBody, TableCell, TableRow } from '~/components/table';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;

  const onSubmit = async event => {
    event.preventDefault();
    setStatusError('');

    if (sending) return;

    try {
      setSending(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          message: message.value,
        }),
      });

      const responseMessage = await response.json();

      const statusError = getStatusError({
        status: response?.status,
        errorMessage: responseMessage?.error,
        fallback: 'There was a problem sending your message',
      });

      if (statusError) throw new Error(statusError);

      setComplete(true);
      setSending(false);
    } catch (error) {
      setSending(false);
      setStatusError(error.message);
    }
  };

  return (
    <Section className={styles.contact}>
        <Transition unmount in={!complete} timeout={1600}>
          {({ status, nodeRef }) => (
            <>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

            <div className={styles.contactTable}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div style={{ fontSize: '1.5rem' }}>Mail:</div>
                    </TableCell>
                    <TableCell>
                      <span style={{ fontSize: '1.5rem' }}>
                        <Link href={'mailto:mustafatrunkwala8@gmail.com'}>
                          mustafatrunkwala8@gmail.com
                        </Link>
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div style={{ fontSize: '1.5rem' }}>Phone:</div>
                    </TableCell>
                    <TableCell>
                      <span style={{ fontSize: '1.5rem' }}>
                        <Link href={'tel:+917755965855'}>+917755965855</Link>
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          
          </>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getStatusError({
  status,
  errorMessage,
  fallback = 'There was a problem with your request',
}) {
  if (status === 200) return false;

  const statuses = {
    500: 'There was a problem with the server, try again later',
    404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
