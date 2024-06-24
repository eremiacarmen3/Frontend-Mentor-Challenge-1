import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SnackbarDemo extends JFrame {
    private JButton openSnackbarButton;
    private JLabel snackbarLabel;
    private Timer timer;

    public SnackbarDemo() {
        // Setup the frame
        setTitle("Snackbar Demo");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Initialize components
        openSnackbarButton = new JButton("Open Snackbar");
        snackbarLabel = new JLabel("Note archived", SwingConstants.CENTER);
        snackbarLabel.setOpaque(true);
        snackbarLabel.setBackground(Color.GRAY);
        snackbarLabel.setForeground(Color.WHITE);
        snackbarLabel.setVisible(false);

        // Add components to the frame
        add(openSnackbarButton, BorderLayout.CENTER);
        add(snackbarLabel, BorderLayout.SOUTH);

        // Action listener for the button
        openSnackbarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                handleClick();
            }
        });
    }

    private void handleClick() {
        snackbarLabel.setVisible(true);

        // Set a timer to hide the snackbar after 6 seconds
        timer = new Timer(6000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                handleClose();
            }
        });
        timer.setRepeats(false); // Only execute once
        timer.start();
    }

    private void handleClose() {
        snackbarLabel.setVisible(false);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new SnackbarDemo().setVisible(true);
            }
        });
    }
}