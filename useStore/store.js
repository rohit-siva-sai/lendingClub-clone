import { create } from "zustand";
import { persist } from "zustand/middleware";




const store = (set) => ({
  progress: 0,
  loanType: "justme",
  dob: "",
  totalIncome: null,
  loan: { loanAmount: 1000, loanPurpose: "" },
  username: { firstName: "", lastName: "" },
  phoneNumber: "",
  userId: "",
  userEmail: null,
  panCardNo: null,
  userAddress: { street: "", city: "", state: "", zip: null },
  userDetails:  {},
  intrestRate: 10 / 12 / 100,

  updateIncreaseProgress: async () =>
    set((store) => ({
      progress: store.progress + 12.5 > 100 ? 100 : store.progress + 12.5,
    })),
  updateDecreaseProgress: async () =>
    set((store) => ({
      progress: store.progress - 12.5 < 0 ? 0 : store.progress - 12.5,
    })),
  updateLoanType: async (type) => set((store) => ({ loanType: type })),
  updateDob: async (dob) => set((store) => ({ dob: dob })),
  updateLoan: async (loan) => set((store) => ({ loan: loan })),
  updateTotalIncome: async (income) =>
    set((store) => ({ totalIncome: income })),
  updateUserName: async (user) => set((store) => ({ username: user })),
  updateAddress: async (address) => set((store) => ({ userAddress: address })),
  updateUserEmail: async (email) => set((store) => ({ userEmail: email })),
  updatePhoneNumber: async (phoneNumber) =>
    set((store) => ({ phoneNumber: phoneNumber })),
  updateUserId: async (userId) => set((store) => ({ userId: userId })),
  updatePanCardNo: async (panNo) => set((store) => ({ panCardNo: panNo })),
  updateUserDetails: async (user) => set( (store) => ({ userDetails:  user })),
  updateProgress: async (user) => set( (store) => ({ progress:  0 })),

  // set(
  //   produce((store) => ({
  //     principalAmount: (amount * time * 10) / 1000,
  //   })),
  //   false,
  //   "amountChange"
  // ),
});

export const useStore = create(store, { name: "store" });
