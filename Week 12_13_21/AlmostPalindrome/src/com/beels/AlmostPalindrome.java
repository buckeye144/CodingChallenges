package com.beels;

public class AlmostPalindrome {
    public static void main(String[] args) {
        System.out.println(almostPalindrome("abcdcbg"));
        System.out.println(almostPalindrome("abccia"));
        System.out.println(almostPalindrome("abcdaaa"));
        System.out.println(almostPalindrome("1234312"));
    }

    public static boolean almostPalindrome(String s) {
        int j = s.length() - 1;
        int count = 0;
        for (int i = 0; i <= j; i++) {
            if (s.charAt(i) != s.charAt(j)) {
                count++;
            }

            j--;
        }

        if (count <= 1) {
            return true;
        }

        return false;
    }
}
