import { Kafka, Consumer } from 'kafkajs';
import { OnKafkaBalanceUpdated } from '../../events/on-kafka-balance-updated.event';

const kafka = new Kafka({
  clientId: 'nodeapp',
  brokers: ['kafka: 29092']
});

const consumer: Consumer = kafka.consumer({ groupId: 'nodeapp-group' });

export const kafkaConsumer = async (): Promise<void> => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'balances', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }): Promise<void> => {
      console.log(`Topic: ${topic}, Partition: ${partition}, Message: ${message.value.toString()}`);
      if (topic == 'balances') {
        const payload = JSON.parse(message.value.toString());
        OnKafkaBalanceUpdated.getInstance().raise(payload);
      }
    },
  });
};