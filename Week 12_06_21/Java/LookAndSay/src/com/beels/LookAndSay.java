package com.beels;

import java.math.BigInteger;

public class LookAndSay {
    public static void main(String[] args) {
        System.out.println(lookAndSay(new BigInteger("1213200012171979")));
        System.out.println(lookAndSay(new BigInteger("54544666")));
        System.out.println(lookAndSay(new BigInteger("95")));
        System.out.println(lookAndSay(new BigInteger("1213141516171819")));
        System.out.println(lookAndSay(new BigInteger("120520")));
        System.out.println(lookAndSay(new BigInteger("231")));
    }

    public static BigInteger lookAndSay(BigInteger input) {
        StringBuilder result = new StringBuilder();

        String stringInput = input.toString();

        if (stringInput.length() % 2 != 0) {
            return new BigInteger("-1");
        }

        for (int i = 0; i < stringInput.length(); i += 2) {
            int count = Character.getNumericValue(stringInput.charAt(i));
            int num = Character.getNumericValue(stringInput.charAt(i+1));

            for (int j = 0; j < count; j++) {
                result.append(num);
            }
        }

        return new BigInteger(result.toString());
    }
}
