import { defineStore } from "pinia";
import { sampleRecipients } from "@/data/sampleRecipints";

export const userecipientStore = defineStore('recipients', {
  state: () => ({
    recipients: [...sampleRecipients],
  }),
  getters: {
    recipientCount: (state) => state.recipients.length
  },
  actions: {
    addRecipient(recipient) {
      const newRecipient = {
        id: Date.now(),
        ...recipient,
      }
      this.recipients.push(newRecipient)
    },
    updateRecipient(id, updatedRecipient) {
      const recipientIndex = this.recipients.findIndex(
        (recipient) => recipient.id === id,
      )

      if (recipientIndex !== -1) {
        this.recipients[recipientIndex] = {
          id,
          ...updatedRecipient,
        }
      }
    },
    deleteRecipient(id) {
      this.recipients = this.recipients.filter(
        (recipient) => recipient.id !== id,
      )
    },
    deleteRecipients(ids) {
      this.recipients = this.recipients.filter(
        (recipient) => !ids.includes(recipient.id),
      )
    },
    updateRecipientsStatus(ids, status) {
      this.recipients = this.recipients.map((recipient) => {
        if (ids.includes(recipient.id)) {
          return {
            ...recipient,
            status,
          }
        }
        return recipient
      })
    },
  },
})
